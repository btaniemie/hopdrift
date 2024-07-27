import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigation } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";


function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [openDialog, setOpenDialog] = useState(false);
  const login = useGoogleLogin({
    onSuccess: (codeResp) => getUserProfile(codeResp),
    onError: (error) => console.log(error)
  })
  // const navigation = useNavigation();

  const getUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDialog(false);
      window.location.reload();
    })
  }

  useEffect(() => {
    console.log(user)
  }, [])
  return (
    <div className='w-screen p-3 shadow-sm flex justify-between items-center px-5'>
      <a href='/'>
        <div className='flex'>
          <img src='/logo.svg' className='w-10'/>
          <div className='font-bold text-sky-700 content-center text-2xl ml-1'>hopdrift</div>
        </div>
      </a>

      <div>
        {user?
        <div className='flex items-center gap-5'>
          <a href='/create-trip'>
            <Button variant="outline" className="rounded-full">Generate trip</Button>
          </a>
          <a href='/my-trips'>
            <Button variant="outline" className="rounded-full">My trips</Button>
          </a>

          <Popover>
          <PopoverTrigger>
            <img src={user?.picture} className='h-[35px] w-[35px] rounded-full'/>
          </PopoverTrigger>
          <PopoverContent>
            <a href='/'>
              <h2 className="cursor-pointer hover:text-sky-700 text-center font-medium" onClick={() => {
                googleLogout();
                localStorage.clear();
                // window.location.reload();
              }}>Sign out</h2>
            </a>
          </PopoverContent>
        </Popover>

        </div>
        :
          <Button onClick={() => setOpenDialog(true)}>Sign In</Button>}
      </div>
      <Dialog open={openDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
          <div className='flex'>
            <img src='/logo.svg' className='w-10'/>
            <div className='font-bold text-sky-700 content-center text-2xl ml-1'>hopdrift</div>
        </div>
        <h2 className='font-bold text-lg mt-7'>Sign in with Google</h2>
        <p>Robust and secure authentication with Google Auth</p>
        <Button className="w-full mt-5" onClick={login} > 
          <FcGoogle className='mr-1'/> Sign in with Google
        </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default Header