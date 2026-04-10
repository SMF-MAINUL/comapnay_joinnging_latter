function nextStep(step) {
  if (step === 2 && !document.getElementById("policyAgree").checked) {
    alert("Please accept the policies first.");
    return;
  }

  // Update Sections
  document
    .querySelectorAll(".step-section")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById("step" + step).classList.add("active");

  // Update Sidebar
  document
    .querySelectorAll(".step-item")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById("s" + step).classList.add("active");

  // Start Webcam on Step 3
  if (step === 3) startCamera();
}

function prevStep(step) {
  nextStep(step);
}

async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    document.getElementById("webcam").srcObject = stream;
  } catch (err) {
    console.error("Camera access denied", err);
  }
}

document.getElementById("onboardingForm").onsubmit = function (e) {
  e.preventDefault();
  alert("Joining process completed! Welcome to AIH Bangladesh.");
};

// আপনার এপিআই থেকে ডাটা ফেচ করার ফাংশন
async function fetchCompanyPolicies() {
  try {
    // এখানে আপনার এপিআই ইউআরএল দিবেন
    // const response = await fetch('https://api.aihbd.com/v1/policies');
    // const data = await response.json();

    // উদাহরণ হিসেবে একটি মার্কডাউন স্ট্রিং দেওয়া হলো
    //         const markdownData = `
    // ### 1. Confidentiality & NDA
    // Any source code related to **BastobShop** or AIH Bangladesh is strictly confidential. Unauthorized sharing will lead to legal action.

    // ### 2. Professional Ethics
    // Respect and collaboration within the development team are mandatory.

    // ### 3. Data Protection
    // Employee must handle customer data with 256-bit encryption standards.
    //         `;

//     const markdownData = `
// ### ১. গোপনীয়তা রক্ষা এবং NDA চুক্তি
// **AIH Bangladesh** এবং **BastobShop** এর প্রোজেক্ট সংশ্লিষ্ট সকল সোর্স কোড, ডাটাবেজ আর্কিটেকচার, এপিআই এন্ডপয়েন্ট এবং ইন্টারনাল লজিক সম্পূর্ণ গোপনীয়। 
// *   কর্তৃপক্ষের লিখিত অনুমতি ছাড়া কোড শেয়ার করা বা ব্যক্তিগত কাজে ব্যবহার করা কঠোরভাবে নিষিদ্ধ।
// *   কোনো ধরনের তথ্য ফাঁস বা অননুমোদিত অ্যাক্সেস প্রমাণিত হলে তা আইনি অপরাধ হিসেবে গণ্য হবে।

// ### ২. প্রফেশনাল এথিক্স ও টিম কোলাবরেশন
// একজন ডেভেলপার হিসেবে টিমের সবার সাথে পেশাদার আচরণ এবং সহযোগিতা বজায় রাখা বাধ্যতামূলক।
// *   **Version Control:** নিয়মিত কোড কমিট করা এবং প্রপার 'Commit Message' ব্যবহার করা।
// *   **Documentation:** আপনার কোডের জটিল অংশগুলোর জন্য প্রয়োজনীয় কমেন্ট বা ডকুমেন্টেশন প্রদান করা।
// *   নির্দিষ্ট ডেডলাইনের মধ্যে টাস্ক সম্পন্ন করার সর্বোচ্চ চেষ্টা করা।

// ### ৩. ডাটা সিকিউরিটি ও এনক্রিপশন
// ইউজারদের ব্যক্তিগত তথ্য এবং পেমেন্ট গেটওয়ে সংশ্লিষ্ট ডাটা হ্যান্ডেল করার সময় সর্বোচ্চ সতর্কতা অবলম্বন করতে হবে।
// *   সেনসিটিভ ডাটার ক্ষেত্রে অবশ্যই **AES-256 bit** বা তার বেশি মানের এনক্রিপশন স্ট্যান্ডার্ড বজায় রাখতে হবে।
// *   কোডের ভেতরে কোনো 'Hardcoded API Key' বা 'Secret Credentials' রাখা যাবে না; অবশ্যই পরিবেশ ভেরিয়েবল (Env variables) ব্যবহার করতে হবে।

// ### ৪. ইন্টেলেকচুয়াল প্রপার্টি (IP) রাইটস
// অফিস চলাকালীন বা অফিসের রিসোর্স ব্যবহার করে আপনার তৈরি করা সকল সোর্স কোড এবং ইনোভেশনের মালিকানা **AIH Bangladesh** এর থাকবে। চুক্তিকালীন সময়ে বা পরবর্তী সময়ে এই কোড অন্য কোথাও বিক্রি বা হস্তান্তর করা যাবে না।
// `;


const markdownData = `
### ১. কাজের ধরণ ও কর্মস্থল (Work Location)
**AIH Bangladesh** একটি ফ্লেক্সিবল কর্মপরিবেশে বিশ্বাসী, তবে তা কোম্পানির প্রয়োজনের ওপর নির্ভরশীল।
* **Hybrid/Remote Work:** বর্তমানে কাজ রিমোটলি করার সুযোগ থাকলেও, কোম্পানির সিদ্ধান্ত অনুযায়ী বিশেষ প্রয়োজনে বা প্রজেক্টের খাতিরে আপনাকে সশরীরে অফিসে উপস্থিত হতে হবে।
* **Communication:** রিমোট কাজের সময় অফিস চলাকালীন নির্ধারিত কমিউনিকেশন চ্যানেলে (যেমন: Slack, Discord বা WhatsApp) সক্রিয় থাকা বাধ্যতামূলক।

### ২. গোপনীয়তা রক্ষা এবং নন-ডিসক্লোজার (NDA)
**BastobShop** এবং কোম্পানির সকল প্রজেক্টের সোর্স কোড, ডাটাবেজ আর্কিটেকচার এবং বিজনেস লজিক কোম্পানির পরম সম্পদ।
* কর্তৃপক্ষের লিখিত অনুমতি ছাড়া কোড শেয়ার করা বা ব্যক্তিগত রিপোজিটরিতে রাখা কঠোরভাবে নিষিদ্ধ।
* **Data Protection:** কোম্পানির কোনো ডাটা চুরি করা, অননুমোদিত কপি করা বা তৃতীয় পক্ষের কাছে বিক্রি করা প্রমাণিত হলে তা **ডিজিটাল নিরাপত্তা আইন (Digital Security Act)** অনুযায়ী দণ্ডনীয় অপরাধ হিসেবে গণ্য হবে এবং কোম্পানি তাৎক্ষণিক আইনি ব্যবস্থা গ্রহণ করবে।

### ৩. ইন্টেলেকচুয়াল প্রপার্টি (IP) ও মালিকানা
চুক্তি চলাকালীন অফিসের রিসোর্স বা অফিস সময়ে আপনার তৈরি করা সকল সোর্স কোড, ডিজাইন, এবং ইনোভেশনের পূর্ণ মালিকানা শুধুমাত্র **AIH Bangladesh** এর থাকবে।
* কোম্পানি থেকে পদত্যাগ করার পর এই কোড অন্য কোথাও ব্যবহার বা বিক্রি করা সম্পূর্ণ অবৈধ।

### ৪. প্রফেশনাল এথিক্স ও টিম স্ট্যান্ডার্ড
ডেভেলপার হিসেবে আপনাকে আধুনিক ইন্ডাস্ট্রি স্ট্যান্ডার্ড বজায় রাখতে হবে।
* **Version Control:** প্রতিদিনের কাজের আপডেট সঠিক 'Commit Message' সহ গিট-এ পুশ করতে হবে।
* **Security:** কোডের ভেতরে কোনো 'Hardcoded API Key' বা পাসওয়ার্ড রাখা যাবে না। সকল সেনসিটিভ ডাটা এনক্রিপশন (AES-256) এবং এনভায়রনমেন্ট ভেরিয়েবল (.env) এর মাধ্যমে হ্যান্ডেল করতে হবে।

> **⚠️ বিশেষ সতর্কতা (Legal Note):**
> 
> **শৃঙ্খালা ও আইনি ব্যবস্থা:** কোম্পানি পলিসির যেকোনো একটি ধারা লঙ্ঘন করলে কর্তৃপক্ষ কোনো পূর্ব নোটিশ ছাড়াই নিয়োগ বাতিলের ক্ষমতা রাখে। বিশেষ করে **ডাটা ব্রিচ (Data Breach)** বা **ইন্টেলেকচুয়াল প্রপার্টি (IP)** চুরির প্রমাণ পাওয়া গেলে কোম্পানির আর্থিক ক্ষতিপূরণ আদায়ের লক্ষ্যে সংশ্লিষ্ট ব্যক্তির বিরুদ্ধে বাংলাদেশের প্রচলিত আইন অনুযায়ী **দেওয়ানি ও ফৌজদারি মামলা** দায়ের করা হবে।


`;

    // Marked.js ব্যবহার করে মার্কডাউনকে HTML এ রূপান্তর
    document.getElementById("policy-content").innerHTML =
      marked.parse(markdownData);
  } catch (error) {
    document.getElementById("policy-content").innerHTML =
      "<p>Error loading policies. Please contact HR.</p>";
    console.error("API Error:", error);
  }
}

// পেজ লোড হওয়ার সময় এপিআই কল হবে
window.onload = fetchCompanyPolicies;
