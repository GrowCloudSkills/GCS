---
title: "Oracle Fusion HCM Person Entity: The Foundation of Employee Data"
description: "Complete guide to understanding the Person entity in Oracle Fusion HCM Cloud, including data model, key attributes, and practical SQL queries for data retrieval."
pubDate: 2026-08-25
category: "Functional"
tags: ["Person", "HCM Data Model", "Employee Management", "Data Retrieval", "SQL Queries"]
readTime: 8
---

# Oracle Fusion HCM Person Entity: The Foundation of Employee Data

The **Person** entity is the cornerstone of Oracle Fusion HCM Cloud. Every employee, contingent worker, applicant, and contractor begins as a Person record. Understanding this foundational entity is critical for HCM administrators, functional consultants, and anyone working with Oracle Fusion workforce data.

![Data Loader Overview](/images/Posts/oracle-fusion-person-entity/oracle-fusion-person-entity.png)

## What is the Person Entity?

In Oracle Fusion HCM, a **Person** represents any individual in your organization—whether they're an active employee, former employee, job applicant, or contingent worker. The Person entity stores core biographical information that serves as the master record for all workforce-related transactions.

Think of it this way: The Person record is like the "identity card" of your organization. It contains essential information that identifies an individual uniquely within the system.

### Key Characteristics:

- **Universal Identifier:** Every person gets a unique Person ID
- **Master Record:** All employee, applicant, and worker records reference a Person
- **Biographical Data:** Stores name, date of birth, gender, and identification numbers
- **Status Tracking:** Tracks whether someone is an active employee, terminated, or applicant
- **Effective Dating:** Changes to person data are tracked with effective dates for compliance and audit

## Core Attributes of the Person Entity

Understanding the key attributes will help you work effectively with person data:

### Essential Attributes:

| Attribute | Purpose | Example |
|-----------|---------|---------|
| **Person ID** | Unique identifier | 300001234 |
| **Full Name** | Employee's name | Vaibhav Chavan |
| **Date of Birth** | Birth date | 1990-05-15 |
| **Gender** | M/F designation | M |
| **Marital Status** | Relationship status | Married |
| **Nationality** | Country of citizenship | Indian |
| **Email Address** | Primary contact | vaibhav@example.com |
| **National ID** | Government ID number | Passport, Aadhar, etc. |
| **Effective Start Date** | When record becomes active | 2026-01-01 |
| **Effective End Date** | When record ends (if applicable) | NULL for active |

## Person Types in Oracle Fusion HCM

Not all Person records are employees. Fusion supports multiple person types:

### Person Type Categories:

1. **Employee** - Active workforce members
2. **Contingent Worker** - Contractors, consultants, freelancers
3. **Applicant** - Job candidates in recruitment process
4. **Other Worker** - Support staff, interns, volunteers
5. **Ex-Employee** - Terminated employees
6. **Candidate** - Former applicants

Each person type has specific attributes and workflows associated with it.

## Data Model Relationships

The Person entity is connected to multiple other entities in the HCM data model:

```
Person
  ├── Assignment (Employee/Work Assignment)
  ├── Employment (Employment History)
  ├── Contact (Personal Contact Information)
  ├── Address (Residential/Work Address)
  ├── Phone (Phone Numbers)
  ├── Salary (Compensation Data)
  ├── Benefits (Enrollment Records)
  └── Development (Learning/Training)
```

Each assignment creates a work relationship linking a Person to a Job, Position, and Department.

## Practical SQL Queries to Retrieve Person Data

### Query 1: Retrieve Active Employees with Contact Information

This query retrieves all active employees along with their essential contact information:

```sql
SELECT 
    p.person_id,
    p.full_name,
    p.date_of_birth,
    p.gender,
    p.email_address,
    pea.email_address AS work_email,
    pph.phone_number,
    pph.phone_type,
    p.effective_start_date,
    p.effective_end_date
FROM 
    per_persons p
    LEFT JOIN per_emails pea ON p.person_id = pea.person_id 
        AND pea.email_type = 'W_EMAIL'
        AND TRUNC(SYSDATE) BETWEEN pea.effective_start_date 
        AND NVL(pea.effective_end_date, TRUNC(SYSDATE))
    LEFT JOIN per_phones pph ON p.person_id = pph.person_id 
        AND pph.phone_type = 'M_PHONE'
        AND TRUNC(SYSDATE) BETWEEN pph.effective_start_date 
        AND NVL(pph.effective_end_date, TRUNC(SYSDATE))
WHERE 
    p.effective_end_date IS NULL
    AND TRUNC(SYSDATE) BETWEEN p.effective_start_date 
    AND NVL(p.effective_end_date, TRUNC(SYSDATE))
ORDER BY 
    p.full_name;
```

**What this query does:**
- Retrieves all active Person records (those without an effective end date)
- Joins to the email and phone tables to get current contact information
- Filters for work emails and mobile phone numbers
- Uses effective dating to ensure you get current data
- Returns results sorted alphabetically by name

---

### Query 2: Get Person Demographics and Employment Status Summary

This query provides demographic information and employment status across your organization:

```sql
SELECT 
    p.person_id,
    p.full_name,
    p.date_of_birth,
    EXTRACT(YEAR FROM SYSDATE) - EXTRACT(YEAR FROM p.date_of_birth) AS age,
    p.gender,
    CASE 
        WHEN p.gender = 'M' THEN 'Male'
        WHEN p.gender = 'F' THEN 'Female'
        ELSE 'Not Specified'
    END AS gender_description,
    p.marital_status,
    p.nationality,
    CASE 
        WHEN p.effective_end_date IS NULL THEN 'Active'
        WHEN p.effective_end_date < TRUNC(SYSDATE) THEN 'Terminated'
        ELSE 'Pending'
    END AS person_status,
    COUNT(DISTINCT pea.assignment_id) AS total_assignments,
    p.effective_start_date,
    p.effective_end_date
FROM 
    per_persons p
    LEFT JOIN per_assignment_v pea ON p.person_id = pea.person_id
        AND TRUNC(SYSDATE) BETWEEN pea.effective_start_date 
        AND NVL(pea.effective_end_date, TRUNC(SYSDATE))
WHERE 
    TRUNC(SYSDATE) BETWEEN p.effective_start_date 
    AND NVL(p.effective_end_date, TRUNC(SYSDATE))
GROUP BY 
    p.person_id,
    p.full_name,
    p.date_of_birth,
    p.gender,
    p.marital_status,
    p.nationality,
    p.effective_start_date,
    p.effective_end_date
ORDER BY 
    p.full_name;
```

**What this query does:**
- Calculates age based on date of birth
- Shows employment status (Active/Terminated/Pending)
- Counts the number of assignments per person
- Provides demographic overview for reporting
- Useful for HR analytics and reporting dashboards

---

### Query 3: Find Persons and Their Latest Assignment Details

This query connects Person data with their current job assignment information:

```sql
SELECT 
    p.person_id,
    p.full_name,
    p.email_address,
    pa.assignment_id,
    pa.assignment_number,
    pj.name AS job_name,
    pp.name AS position_name,
    pd.name AS department_name,
    porg.name AS organization_name,
    pa.assignment_type,
    CASE 
        WHEN pa.primary_assignment_flag = 'Y' THEN 'Primary'
        ELSE 'Secondary'
    END AS assignment_priority,
    pa.effective_start_date AS assignment_start,
    pa.effective_end_date AS assignment_end,
    CASE 
        WHEN pa.effective_end_date IS NULL THEN 'Active'
        ELSE 'Inactive'
    END AS assignment_status,
    pa.grade_id,
    pa.payroll_id
FROM 
    per_persons p
    INNER JOIN per_assignment_v pa ON p.person_id = pa.person_id
        AND TRUNC(SYSDATE) BETWEEN pa.effective_start_date 
        AND NVL(pa.effective_end_date, TRUNC(SYSDATE))
    LEFT JOIN per_jobs pj ON pa.job_id = pj.job_id
        AND TRUNC(SYSDATE) BETWEEN pj.effective_start_date 
        AND NVL(pj.effective_end_date, TRUNC(SYSDATE))
    LEFT JOIN per_positions pp ON pa.position_id = pp.position_id
        AND TRUNC(SYSDATE) BETWEEN pp.effective_start_date 
        AND NVL(pp.effective_end_date, TRUNC(SYSDATE))
    LEFT JOIN hr_departments pd ON pa.department_id = pd.department_id
        AND TRUNC(SYSDATE) BETWEEN pd.effective_start_date 
        AND NVL(pd.effective_end_date, TRUNC(SYSDATE))
    LEFT JOIN hr_organization_v porg ON pa.organization_id = porg.organization_id
        AND TRUNC(SYSDATE) BETWEEN porg.effective_start_date 
        AND NVL(porg.effective_end_date, TRUNC(SYSDATE))
WHERE 
    p.effective_end_date IS NULL
    AND pa.primary_assignment_flag = 'Y'
ORDER BY 
    porg.name,
    pd.name,
    p.full_name;
```

**What this query does:**
- Links Person records to their current job assignments
- Shows job title, position, department, and organization
- Identifies primary vs. secondary assignments
- Displays payroll and grade information
- Perfect for org chart and staff listing reports
- Uses effective dating for accurate current data

---

## Best Practices When Working with Person Data

### 1. Always Use Effective Dating

Always include effective date logic in your queries:
```sql
TRUNC(SYSDATE) BETWEEN p.effective_start_date 
AND NVL(p.effective_end_date, TRUNC(SYSDATE))
```

This ensures you retrieve current, valid data only.

### 2. Join Carefully

When joining Person to other entities, always join through appropriate bridge tables or assignment views. Direct joins can return duplicates or outdated data.

### 3. Test Terminations

Remember that terminated persons still exist in the database with an effective end date. Filter appropriately:
```sql
WHERE p.effective_end_date IS NULL  -- For active only
```

### 4. Understand Person Types

Different person types have different attributes and behaviors. Always filter for the person type you need:
```sql
WHERE person_type_id IN (SELECT person_type_id 
                         FROM per_person_type_classifications 
                         WHERE person_type = 'EMP')
```

### 5. Handle NULL Values

Many person attributes can be NULL (marital status, nationality, middle name). Use NVL or CASE statements to handle these gracefully.

---

## Common Person Entity Use Cases

### Use Case 1: Employee Onboarding
When a new employee is hired, a Person record is created first, followed by an Assignment linking them to a Job and Position. This creates the complete employee record.

### Use Case 2: International Assignment
An employee transferred to another country gets a new Assignment record (linked to the same Person). Their Person record remains unchanged.

### Use Case 3: Applicant to Employee
When an applicant is hired, the existing Person record is updated (not deleted) to reflect their new status as an Employee.

### Use Case 4: Contingent Worker Management
Contractors and consultants have Person records with different person type classifications, enabling proper categorization and compliance tracking.

---

## Troubleshooting Common Person Data Issues

### Issue: Duplicate Person Records
**Cause:** Multiple records created for the same individual
**Solution:** Use person merge function or investigate data integration processes

### Issue: Missing Contact Information
**Cause:** Contact data stored in separate tables, not in Person
**Solution:** Always join to per_emails, per_phones, per_addresses tables

### Issue: Outdated Data in Queries
**Cause:** Not using effective dating logic
**Solution:** Always include effective date filters in WHERE clause

### Issue: Person without Assignment
**Cause:** Normal for applicants or newly created persons
**Solution:** Use LEFT JOIN for assignment to avoid losing person records

---

## Summary

The **Person entity** is fundamental to Oracle Fusion HCM. It represents every individual in your system and serves as the anchor point for all workforce data. Understanding:

✅ Core person attributes
✅ Effective dating principles
✅ Relationship to assignments and jobs
✅ Different person types
✅ How to query person data correctly

...will make you proficient in HCM data management and enable you to build accurate reports, perform data analysis, and troubleshoot employee-related issues.

Master the Person entity, and you've mastered the foundation of Oracle Fusion HCM! 💪

---

## Additional Resources

- Oracle Fusion HCM Data Model Documentation
- Per_Persons Table Reference
- Effective Dating Best Practices
- HCM Data Retrieval Guide

**Have questions about Person data in Oracle Fusion HCM?** Share your scenarios in the comments below!
