import React, { useEffect, useState } from "react";
import { FetchJobs } from "../../api";
import { DataGrid } from '@mui/x-data-grid';
import {
  CircularProgress,
  Button,
} from "@mui/material";

const Jobs = () => {
  const [jobs, setJobs] = useState(null);

  let columns = [
    { title: "ID", field: "Id", width: 65 },
    { title: "NAME", field: "name", width: 160 },
    { title: "DESCRIPTION", field: "description", width: 250 },
    { title: "DATE PUBLISHED", field: "date_published", width: 130 },
    { title: "JOB START DATE", field: "job_start_date", width: 130 },
    { title: "VACANCIES", field: "no_of_vacancies", width: 100 },
    { title: "JOB CATEGORY", field: "job_category", width: 100 },
    { title: "JOB POSITION", field: "job_position", width: 100 },
    { title: "ORAGNIZATION", field: "organization", width: 100 },
    { title: "PROCESS ID", field: "process_id", width: 100 },
  ];

  const fetchJobs = async () => {
    try {
      const { data } = await FetchJobs();
      setJobs(data);
    //   console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div style={{height: '500px'}}>
      {jobs ? (
        <DataGrid
          // onEditCellChange={handleEditCellChange}
          rows={jobs}
          headerHeight={40}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row.Id}
        />
      ) : (
        <CircularProgress size={24} variant="secondary" />
      )}
      {/* {jobs && JSON.stringify(jobs)} */}
    </div>
  );
};

export default Jobs;
