require('express');
const department = require('../Models/department');

async function listDepartments(req, res){
    try{
        await department.findAll({
            attributes:[
                'departmentId',
                'departmentName'
            ],
            order:['departmentName']
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error =>{
        return res.status(400).json({
            error: error
            });
        })
    } catch (e) {
    console.log(e);
    }
}
module.exports = {
    listDepartments
}
