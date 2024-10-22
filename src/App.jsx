
import {  TextField } from '@mui/material'
import './App.css'
import { FormControl } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormLabel } from '@mui/material';
import { Radio } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';





function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
 

    
  


  const [firstName,setFirstName]=useState('')
  console.log(firstName);
  
  const[lastName,setLastName]=useState('')
  console.log(lastName);
  const[dob,setDob]=useState('')
  console.log(dob);
  const[email,setEmail]=useState('')
  const[address,setAddress]=useState('')
  const[phone,setPhone]=useState('')
  const[gender,setGender]=useState('')
  const[course,setCourse]=useState('')
  const [invalidPhone,setInvalidPhone]=useState(false)
  const [invalidEmail,setInvalidEmail]=useState(false)

  const userInputValidate=(inputTag)=>{
    const{name,value}=inputTag
    if(name=="phone"){
      setPhone(value)
      !!value.match(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/) ? setInvalidPhone(false) :setInvalidPhone(true)
    }
    if(name=="email"){
      setEmail(value)
      !!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ? setInvalidEmail(false): setInvalidEmail(true)
    }
  }

  const handleReset=()=>{
    setFirstName('')
    setCourse('')
    setAddress('')
    setLastName('')
    setPhone('')
    setDob('')
    setGender('')
    setEmail('')
    setInvalidEmail(false)
    setInvalidPhone(false)
  }

  const handleSubmit=()=>{
    if(phone && firstName && lastName && address && gender && dob && course )
      {
        alert(`
          -----  Confirm informations: -----
                      Full Name : ${firstName} ${lastName}
                      Date of Birth : ${dob}
                      
                      Course : ${course}
                      Gender : ${gender}
                      Email : ${email}
                      Phone : ${phone}
                      Address : ${address}`)
                    
                      handleReset()
                    }
        else
        {
          alert("Please Fill The Form Completely")
    
        }
        
          
      }
    
  

  return (
    <>
            <ThemeProvider theme={darkTheme}>
            <CssBaseline />
    <div className='p-3 d-flex justify-content-center align-items-center' style={{ width:"100%" ,height:"100vh",backgroundImage:'url("https://static.vecteezy.com/system/resources/previews/036/126/923/non_2x/ai-generated-full-hd-colored-background-abstract-colorful-wallpaper-colored-background-graphic-designed-wallpaper-photo.jpg")',backgroundRepeat:'no-repeat'}}>
    <div  className='background p-5  mt-5'>
    <div className='d-flex justify-content-evenly align-items-center'>
        <h3 className='text-center mb-4'> STUDENT REGISTRATION FORM</h3>
      </div>
      <div className='d-flex justify-content-evenly'>
      <TextField  name='fname' value={firstName || ''} onChange={e=>setFirstName(e.target.value)} id="outlined-basic" label="First Name" variant="outlined"sx={{width:'250px',marginRight:'20px'}} className='first' />
        
      <TextField name='lname' value={lastName || ''} onChange={e=>setLastName(e.target.value)} id="outlined-basic" label="Last Name"   variant="outlined"sx={{width:'250px'}} />


      </div>
      <div className='mt-3'>
      <TextField value={address} onChange={e=>setAddress(e.target.value)} id="outlined-basic" label="Address"   variant="outlined"sx={{width:'500px'}} />
      </div>
      <div className=' d-flex justify-content-evenly mt-3'>
      <TextField   value={dob} onChange={e=>setDob(e.target.value)} id="outlined-basic"  size='large' type='date'  variant="outlined"sx={{width:'240px',marginRight:'20px'}} />
      <TextField  name='phone' value={phone || ''}  onChange={e=>{setPhone(e.target.value); userInputValidate(e.target)}
                }  id="outlined-basic" label="Phone no."   variant="outlined"sx={{width:'250px'}} />


     

      </div>
      <div className='mt-3 d-flex justify-content-evenly'>
      <TextField  name='email' onChange={e=>{setEmail(e.target.value); userInputValidate(e.target)}} value={email || ''} id="outlined-basic" label="Email"   variant="outlined"sx={{width:'240px'}} />

      <FormControl sx={{marginLeft:'40px',width:'240px'}}>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
  row
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    value={gender}
    onChange={e=>setGender(e.target.value)}
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" labelPlacement='End' />
  </RadioGroup>
</FormControl>

         
      </div>
      <div className='mt-3'>
      <FormControl className='w-50 m-2' size="" >

<InputLabel id="demo-simple-select-label">Courses</InputLabel>
<Select sx={{width:'500px'}}
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  name='course'
  label="Course"
  value={course}
  onChange={e=>setCourse(e.target.value)}
  >
  <MenuItem value={'biology'}>Biology </MenuItem>
  <MenuItem value={'computer'}>Computer</MenuItem>
  <MenuItem value={'commerce'}>Commerce</MenuItem>
  <MenuItem value={'humanities'}>Humanities</MenuItem>

</Select>
</FormControl>
      </div>
      <div className='d-flex text-center justify-content-center align-items-center mt-4' >
      <Button onClick={handleSubmit} sx={{background:'#08C2FF'}} variant="contained">Submit</Button>
      <Button  onClick={handleReset} sx={{background:'#08C2FF',marginLeft:"200px"}} variant="contained">Reset</Button>


      </div>




      
    </div>
    </div>
    </ThemeProvider>
    </>
  )
}

export default App
