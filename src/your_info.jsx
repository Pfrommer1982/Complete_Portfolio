//////////////////////////////////////// ** HEADER / HERO SECTION **///////////////////////////////////////////

// your_info.jsx

const backgroundImageUrl = 'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/602f2052692cf988e4c783b6_601dce183e0010a314b36a0a_how-to-make-an-online-portfolio.jpeg';


// Enter here your first and last name
const name = {
  firstname: 'Cate',
  lastname: 'Allen',
// Enter as url a link where your resume can be downloaded ( dropbox, OneDrive, ect )
  url: 'https://docs.google.com/document/d/1SFw5ba34mGjVGe6KhE3KsPZe-Cdx0vng/edit?usp=sharing&ouid=105471999392665827632&rtpof=true&sd=true',
};

// Display your job title or skills or whatever you want in the typewriter
const typeWriterText = [
  'Developer',  
];

// Social media profiles buttons
const socialProfiles = [
  {
    name: 'LinkedIn',
    icon: 'lni lni-linkedin',
    url: 'https://www.linkedin.com/in/cate-m-allen',
  },
  {
    name: 'GitHub',
    icon: 'lni lni-github',
    url: 'https://github.com/cateallen',
  }
];

//////////////////////////////////////// ** CONTENT SECTION **//////////////////////////////////////////////////


const categories = [
  {
    name: 'Developer Portfolio Projects',
    icon: 'lni lni-code',
    title: 'Developer Portfolio Projects',
    description:
      "To be added to..... ",
    skills: [
      {
        icon: 'lni lni-camera',
        title: 'Robotic Process Automation',
      },
      {
        icon: 'lni lni-certificate',
        title: 'Desktop Apps',
      },
      {
        icon: 'lni lni-instagram',
        title: 'Angular',
      },
    ]
  }
      
    ]



//////////////////////////////////////// ** FOOTER SECTION **//////////////////////////////////////////////////



// You can tell something about yourself in the infotext.
const aboutMeText = {
  infotext: `Hi there! I'm Cate, I am a developer and starting to create my personal Projects Portfolio'
    `,
  power_slogan: ``,
};

// For contact form: You need to make an account on emailjs.com
// There you can choose a free tier ( 200 emails per month )
// In your account settings you can see 'serviceID, templateID and userID. 
// Fill them here and it will automatically work. 


export {
  backgroundImageUrl,
  name,
  typeWriterText,
  socialProfiles,
  categories,
  aboutMeText,
};
