var express = required('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

    var query = "select j.Id, j.name, j.description, j.date_published, j.job_start_date, j.no_of_vacancies, jc.name as job_category, jp.name as job_position, o.name as organization, j.process_id from job j, job_category jc, job_position jp, organization o WHERE j.job_category_id = jc.Id AND j.job_position_id = jp.Id AND j.organization_id = o.Id";

    database.query(query, function(err, data){

        if(err) {
           throw err;
        }else{
           response.render('sample_data', {title: 'Job Details Data', 
            action: 'lists', sampleData:data});
        }
    });
});

module.exports = router;