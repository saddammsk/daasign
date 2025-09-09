'use client'
import React, { useState, useEffect, useRef, useMemo } from 'react'
import Link from "next/link";
import Sidebar from "./components/Sidebar";
import LanguageDropdown from "./components/LanguageDropdown";
import IntelDrop from "./components/IntelDrop";
import AccountOverview from "./components/AccountOverview";
import UsageChart from "./components/UsageChart";
import StorageChart from "./components/StorageChart";
import StatusDropdown from "./components/StatusDropdown";
import GPUDropdown from "./components/GPUDropdown";
import CalendarDropdown from "./components/CalendarDropdown";
import GPUTable from "./components/GPUTable";
import ChartFilterDropdown from "./components/ChartFilterDropdown";
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
// import PhoneInput from "react-phone-input-2";
import PhoneInput from "react-phone-number-input";
import "react-phone-input-2/lib/style.css";
import Translator from './components/Translator';
export default function Home() {
  const limit = 5;
  const [used, setUsed] = useState(2.9);

  const free = limit - used;
  const storageFull = used >= limit;

  // Prepare data for the chart
  const chartData = useMemo(
    () => {
      const data = [
        {
          name: "Used",
          value: used,
          color: storageFull ? "#DC2626" : "#2563eb", // 🔴 red when full, 🔵 otherwise
        },
      ];

      if (free > 0) {
        data.push({
          name: "Free Size",
          value: free,
          color: "#F5F5F5", // gray for free
        });
      }

      return data;
    },
    [used, free, storageFull]
  );


  let [isOpen2, setIsOpen2] = useState(false)

  function open() {
    setIsOpen2(true)
  }

  function close() {
    setIsOpen2(false)
  }

  const [isOpen3, setIsOpen3] = useState(false);

  const open2 = () => setIsOpen3(true);
  const close2 = () => setIsOpen3(false);


  const [isOpen, setIsOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])


  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [codeError, setCodeError] = useState("");

  // Dialog 1: Phone validation
  const handlePhoneSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!phone || phone.trim() === "") {
      setPhoneError("Enter a valid phone number including country code.");
      return;
    }

    setPhoneError("");
    close();   // pehla dialog close
    open2();   // dusra dialog open
  };

  // Dialog 2: Code validation
  const handleCodeSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!code || code.trim() === "") {
      setCodeError("Please enter the 6-digit verification code.");
      return;
    }

    setCodeError(""); // clear error if not empty
    alert("Submitted: " + phone + " with code: " + code);
  };
  return (
    <>
 <main>
  <LanguageDropdown/>
  <h1><Translator text="Welcome to our website!" /></h1>
  <p><Translator text="We provide the best services worldwide." /></p>
  <button><Translator text="Upgrade Plan" /></button>
</main>
    </>
  );
}
