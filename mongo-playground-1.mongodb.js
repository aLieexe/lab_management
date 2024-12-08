use('lab_management1');



db.getCollectionNames()

db.lab.insertOne({
    lab_id: "L0001",
    lab_name: "Lab Rekayasa Perangkat Lunak",
    lab_aslab: [
        {
            name: "John Doe",
            email: "johndoe@example.com",
            major: "Physics",
            semester: 5,
            contact: "123-456-7890",
            nim: "2402912314"
        },
        {
            name: "Jane Smith",
            email: "janesmith@example.com",
            major: "Physics",
            semester: 6,
            contact: "987-654-3210",
            nim: "2305112309"
        }
    ],
    lab_staff: {
        name: "Budiono Siregar",
        contact: "09123911231",
    },
    lab_kasublab: {
        name: "Prof. Alan Turing",
        email: "alan.turing@example.com",
        department: "Mathematics",
        contact: "444-444-4444",
        nip: "1230119876543210"
    }
});



db.lab.find()

db.lab.drop()