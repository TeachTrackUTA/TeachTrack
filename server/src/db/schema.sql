--Nandisha Maharjan 03/12/2026

-- users table already exists for authentication

--Other courses like CSE1310
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    code VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(150) NOT NULL
);

--Specific sections of each course (E.g. CSE 1310 Section 001 Spring 2026)
CREATE TABLE sections (
    id SERIAL PRIMARY KEY,
    course_id INT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    professor_id INT REFERENCES users(id) ON DELETE SET NULL,
    section_number VARCHAR(10) NOT NULL,
    semester VARCHAR(20) NOT NULL,
    year INT NOT NULL
    UNIQUE(course_id, section_number, semester, year)
);

--surveys for a specific course section (E.g. CSE 1310 Student Learning Outcome Survey)
CREATE TABLE surveys (
    id SERIAL PRIMARY KEY,
    section_id INT NOT NULL REFERENCES sections(id) ON DELETE CASCADE,
    title VARCHAR(150) NOT NULL,
    description TEXT
);

-- Student Learning Outcome for a course (Each courses has slos (slo1, slo2)
CREATE TABLE slos (
    id SERIAL PRIMARY KEY,
    course_id INT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    label VARCHAR(50) NOT NULL,
    short_description VARCHAR(255),
    description TEXT NOT NULL,
    full_description TEXT,
    tag VARCHAR(100),
    confidence_question TEXT,
    frequency_question TEXT,
    open_ended_prompt TEXT
);

--Student Learning Outcome (slo activities that helped students learn e..g. Lecture, Videos, Labs, Office hours)
CREATE TABLE slo_activities (
    id SERIAL PRIMARY KEY,
    slo_id INT NOT NULL REFERENCES slos(id) ON DELETE CASCADE,
    label VARCHAR(100),
    icon VARCHAR(100),
    display_order INT
);


--Frequency questions e.g. never, rarely, sometimes, often, very often
CREATE TABLE slo_frequency_options (
    id SERIAL PRIMARY KEY,
    slo_id INT NOT NULL REFERENCES slos(id) ON DELETE CASCADE,
    option_text VARCHAR(255),
    display_order INT
);


-- optional quick checks like code questions added to an SLO
CREATE TABLE quick_checks (
    id SERIAL PRIMARY KEY,
    slo_id INT NOT NULL REFERENCES slos(id) ON DELETE CASCADE,
    code_snippet TEXT,
    language VARCHAR(50),
    question TEXT,
    scratch_pad BOOLEAN DEFAULT FALSE,
    answer VARCHAR(10)
);
 
-- quick check multiple choise options i.e. A, B, C or D
CREATE TABLE quick_check_options (
    id SERIAL PRIMARY KEY,
    quick_check_id INT NOT NULL REFERENCES quick_checks(id) ON DELETE CASCADE,
    option_label VARCHAR(10),
    option_value VARCHAR(255)
);

--topics confidence section related to course e.g. for CSE1310 confidence about UNIX & Base conversion, Control Structures, 2D arrays and File handling
CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    course_id INT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    category VARCHAR(100),
    name VARCHAR(255)
);