const department = require('../../Models/department');

function createDepartments(){
    department.bulkCreate(
        [
            {
                "departmentId": 5,
                "departmentName": "Antioquia",
            },
            {
                "departmentId": 8,
                "departmentName": "Atlántico",
            },
            {
                "departmentId": 11,
                "departmentName": "Bogotá D.C.",
            },
            {
                "departmentId": 13,
                "departmentName": "Bolívar",
            },
            {
                "departmentId": 15,
                "departmentName": "Boyacá",
            },
            {
                "departmentId": 17,
                "departmentName": "Caldas",
            },
            {
                "departmentId": 18,
                "departmentName": "Caquetá",
            },
            {
                "departmentId": 19,
                "departmentName": "Cauca",
            },
            {
                "departmentId": 19,
                "departmentName": "Cauca",
            },
            {
                "departmentId": 20,
                "departmentName": "Cesar",
            },
            {
                "departmentId": 23,
                "departmentName": "Córdoba",
            },
            {
                "departmentId": 25,
                "departmentName": "Cundinamarca",
            },
            {
                "departmentId": 27,
                "departmentName": "Chocó",
            },
            {
                "departmentId": 41,
                "departmentName": "Huila",
            },
            {
                "departmentId": 44,
                "departmentName": "La Guajira",
            },
            {
                "departmentId": 47,
                "departmentName": "Magdalena",
            },
            {
                "departmentId": 50,
                "departmentName": "Meta",
            },
            {
                "departmentId": 52,
                "departmentName": "Nariño",
            },
            {
                "departmentId": 54,
                "departmentName": "Norte de Santander",
            },
            {
                "departmentId": 63,
                "departmentName": "Quindío",
            },
            {
                "departmentId": 66,
                "departmentName": "Risaralda",
            },
            {
                "departmentId": 68,
                "departmentName": "Santander",
            },
            {
                "departmentId": 70,
                "departmentName": "Sucre",
            },
            {
                "departmentId": 73,
                "departmentName": "Tolima",
            },
            {
                "departmentId": 76,
                "departmentName": "Valle del Cauca",
            },
            {
                "departmentId": 81,
                "departmentName": "Arauca",
            },
            {
                "departmentId": 85,
                "departmentName": "Casanare",
            },
            {
                "departmentId": 86,
                "departmentName": "Putumayo",
            },
            {
                "departmentId": 88,
                "departmentName": "Archipiélago de San Andrés, Providencia y Santa Catalina",
            },
            {
                "departmentId": 91,
                "departmentName": "Amazonas",
            },
            {
                "departmentId": 94,
                "departmentName": "Guainía",
            },
            {
                "departmentId": 95,
                "departmentName": "Guaviare",
            },
            {
                "departmentId": 97,
                "departmentName": "Vaupés",
            },
            {
                "departmentId": 99,
                "departmentName": "Vichada",
            }
        ],
        {
            ignoreDuplicates: true,
        }
    ).then(() => console.log("Departments were successfully created"));
}

module.exports = {
   createDepartments
};