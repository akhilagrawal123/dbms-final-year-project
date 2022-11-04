const express = require('express');
const router = express.Router();
const connection = require('./database');

router.get("/jobs", function(req, res) {
        let sql = "select j.Id, j.name, j.description, j.date_published, j.job_start_date, j.no_of_vacancies, jc.name as job_category, jp.name as job_position, o.name as organization, j.process_id from job j, job_category jc, job_position jp, organization o WHERE j.job_category_id = jc.Id AND j.job_position_id = jp.Id AND j.organization_id = o.Id;";
        connection.query(sql, function(err, results){
            if (err) throw err;
            res.send(results);
        });
    });

module.exports = router;