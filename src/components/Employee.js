import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Employee() {
    const paperStyle = {padding: '50px 20px', width:1200, margin:'20px auto'}
    const[firstName,setFirstName] = React.useState('')
    const[lastName,setLastName] = React.useState('')
    const[emailID,setEmailID] = React.useState('')
    const[visaStatus,setVisaStatus] = React.useState('')
    const[dob,setDob] = React.useState('')
    const[clgOfGrad,setClgOfGrad] = React.useState('')
    const[visaStartDate,setVisaStartDate] = React.useState('')
    const[visaExpiryDate,setVisaExpiryDate] = React.useState('')
    const[employees,setEmployees] = React.useState([])

    const handleClick=(e)=> {
        e.preventDefault()
        const employee = {firstName,lastName,emailID,visaStatus,dob,clgOfGrad,visaStartDate,visaExpiryDate}
        console.log(employee)
        fetch("http://localhost:8081/employees", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(employee)
        }).then(()=>{
            console.log("New Employee Added")
        })
    }

    React.useEffect(()=>{
        fetch("http://localhost:8081/employees")
        .then(res=>res.json())
        .then((result)=>{
            setEmployees(result);
        })
    })
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h3 style={{color: "blue"}}>Employee Form</h3>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField id="outlined-basic" label="Firstname" variant="outlined" fullWidth
        value={firstName}
        onChange={(e)=> setFirstName(e.target.value)}
        />
      <TextField id="outlined-basic" label="Lastname" variant="outlined" fullWidth
      value={lastName}
      onChange={(e)=> setLastName(e.target.value)}
      />
      <TextField id="outlined-basic" label="EmailId" variant="outlined" fullWidth
      value={emailID}
      onChange={(e)=> setEmailID(e.target.value)}
      />
      <TextField id="outlined-basic" label="Visa Status" variant="outlined" fullWidth
      value={visaStatus}
      onChange={(e)=> setVisaStatus(e.target.value)}
      />
      <TextField id="outlined-basic" label="Date of Birth(mm-dd-yyyy)" variant="outlined" fullWidth
      value={dob}
      onChange={(e)=> setDob(e.target.value)}
      />
      <TextField id="outlined-basic" label="College of Graduation" variant="outlined" fullWidth
      value={clgOfGrad}
      onChange={(e)=> setClgOfGrad(e.target.value)}
      />
      <TextField id="outlined-basic" label="Visa Start Date(mm-dd-yyyy)" variant="outlined" fullWidth
      value={visaStartDate}
      onChange={(e)=> setVisaStartDate(e.target.value)}
      />
      <TextField id="outlined-basic" label="Visa Expiry Date(mm-dd-yyyy)" variant="outlined" fullWidth
      value={visaExpiryDate}
      onChange={(e)=> setVisaExpiryDate(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>SUBMIT</Button>

    </Box>
    </Paper>
    <Paper elevation={3} style={paperStyle}>
            <h3 style={{color: "blue"}}>Employees</h3>
            {employees.map(employee=>(
                <Paper elevation={6} style={{margin: "10px", padding:"15px", textAlign:"left"}} key={employee.employeeID}>
                    <b>EmployeeId: </b>{employee.employeeID}<br/>
                    <b>Firstname: </b>{employee.firstName}<br/>
                    <b>Lastname: </b>{employee.lastName}<br/>
                    <b>EmailId: </b>{employee.emailID}<br/>
                    <b>Visa Status: </b>{employee.visaStatus}<br/>
                    <b>Date of Birth: </b>{employee.dob}<br/>
                    <b>College of Graduation: </b>{employee.clgOfGrad}<br/>
                    <b>Visa Start Date: </b>{employee.visaStartDate}<br/>
                    <b>Visa Expiry Date: </b>{employee.visaExpiryDate}<br/>
                </Paper>
            ))}

    </Paper>
    </Container>
  );
}
