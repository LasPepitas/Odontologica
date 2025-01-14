

INSERT INTO dentists ( email, specialty, schedule, createdAt, updatedAt, id_user)
VALUES ( 'renerolando321@gmail.com',1, 'Monday-Friday 9am-5pm', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'c47064f9-bd5f-4f7e-8f20-661e232d25c0' );

INSERT INTO treatments (id, name, description, duration, price, createdAt, updatedAt)
VALUES 
('1', 'Cleaning', 'Routine dental cleaning', 30, 50.00, NOW(), NOW()),
('2', 'Extraction', 'Tooth extraction procedure', 60, 100.00, NOW(), NOW()),
('3', 'Filling', 'Dental filling for cavities', 45, 80.00, NOW(), NOW()),
('4', 'Root Canal', 'Root canal therapy for infected tooth', 90, 200.00, NOW(), NOW()),
('5', 'Teeth Whitening', 'Professional teeth whitening treatment', 60, 150.00, NOW(), NOW()),
('6', 'Dental Implant', 'Surgical placement of dental implants', 120, 500.00, NOW(), NOW()),
('7', 'Dentures', 'Full or partial denture fabrication', 180, 800.00, NOW(), NOW()),
('8', 'Orthodontic Treatment', 'Braces or Invisalign for teeth alignment', 180, 1500.00, NOW(), NOW()),
('9', 'Gum Surgery', 'Periodontal surgery for gum disease', 120, 300.00, NOW(), NOW()),
('10', 'Oral Examination', 'Comprehensive dental examination', 45, 75.00, NOW(), NOW());

-- CREATE DENTIST
UPDATE users SET role = 'dentist' WHERE id='c47064f9-bd5f-4f7e-8f20-661e232d25c0';