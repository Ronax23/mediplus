function creator(sub_body, errors)
{
    let old=sub_body.querySelector("ul")
        if (old)
        {
            old.remove()
        }
   if(errors.length>0)
   {
      let disc=document.createElement("ul")
            disc.style.width="100%"
            disc.style.padding="100px"
            disc.style.marginTop="80px"
            disc.style.boxShadow="5px 5px 10px  #f5f5f5"
            sub_body.append(disc)
            errors.forEach(ele=>{
                let self=document.createElement("li")
                self.innerHTML=ele
                disc.append(self)
            })
   }
}

function Rexha(appoint)
{
     let form=appoint.querySelector("#appoint_form")
    let Names=form.querySelector("#names")
    let emails=form.querySelector("#emails")
    let mobmo=form.querySelector("#mobno")
    let doc=form.querySelector("#docname").value
    let depart=form.querySelector("#depart")
    let tex=form.querySelector("#tex")
    

 form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let err=[]
       if(Names.value.length<4)
        {
            err.push("Name Too Short")
        }
          if(emails.value.length<4 || !emails.value.includes("@"))
        {
            err.push("Enter Correct Email")
        }
          
          if(tex.value.length<4)
        {
            err.push("Message Too Short")
        }
          if(mobmo.value.length!=10)
        {
            err.push("Mobile No Should Be 10 Digits")
        }
        
        creator(form,err)

        if(err.length==0)
        {
            alert("Submitted")
            form.reset()
        }
 })

}

// Upside have functions to make data print and to validate data
// Below Data To Manipulate Inner HTML AKA Index page have good coffee with lots of love;) Leticia 
const pb_dat=[
    "Our Cardiac Clinic provides expert care for heart health, with advanced diagnostics and personalized treatment plans",
    "Our Neurology Department offers comprehensive care for brain and nervous system disorders, with cutting-edge diagnostics and tailored treatment plans.",
    "Our Dental Clinic provides expert care for optimal oral health, with advanced treatments and personalized solutions for a brighter smile.",
    "Our Orthopedics Department delivers specialized care for musculoskeletal health, with advanced surgical techniques and personalized rehabilitation plans.",
    "Our Gastroenterology Department offers expert care for digestive health, with advanced diagnostic procedures and personalized treatment plans for optimal gut wellness."
]

const pg_dat=[
    "From preventive cardiology to complex heart conditions, our team delivers compassionate, cutting-edge care to keep your heart healthy",
    "From stroke prevention to complex neurological disorders, our team provides compassionate, innovative care to protect your brain health",
    "From routine cleanings to complex restorative procedures, our team delivers gentle, advanced care to keep your smile healthy and bright",
    "From injury prevention to complex joint replacements, our team offers compassionate, state-of-the-art care to restore your mobility and strength",
    "From digestive wellness to complex gastrointestinal conditions, our team provides empathetic, cutting-edge care to soothe and heal your gut"
]


const departments = {
  cardiac: [
    "Advanced diagnostics for heart health",
    "Personalized treatment plans for optimal care",
    "Preventive cardiology to complex heart condition management"
  ],
  nerulogy: [
    "Advanced diagnostics for brain and nervous system disorders",
    "Personalized treatment plans for optimal neurological care",
    "Comprehensive management of stroke, epilepsy, and other complex neurological conditions"
  ],
  dentist: [
    "Advanced diagnostics for oral health and disease detection",
    "Personalized treatment plans for optimal smile design and oral care",
    "Preventive dentistry to complex restorative procedures for a healthy smile"
  ],
  orth: [
    "Advanced imaging and diagnostics for musculoskeletal health",
    "Personalized treatment plans for optimal joint and bone care",
    "Comprehensive management of sports injuries, arthritis, and other complex orthopedic conditions"
  ],
    gastrology: [
    "Advanced diagnostics for digestive health and disease detection",
    "Personalized treatment plans for optimal gut care and wellness",
    "Comprehensive management of digestive disorders, from acid reflux to complex gastrointestinal conditions"
  ]
};



let act=document.querySelectorAll("#sec10 .dat ")


let change=document.querySelector("#sec10 .changers")
if(change)
{
    let h2=change.querySelector("h2")
let pb=change.querySelector("p")
let pg=change.querySelector(".txt-gray")
let li=change.querySelectorAll("li")

act.forEach((ele,i) => {
    ele.addEventListener("click", () => {
        act.forEach((el) => el.classList.remove("act"));
        ele.classList.add("act");
        let h3=document.querySelectorAll("#sec10 h3")
       h2.innerHTML= h3[i].innerHTML
       h2.style.textTransform="uppercase"
       pb.innerHTML=pb_dat[i]
         pg.innerHTML=pg_dat[i]
         departments[h2.innerHTML].forEach((ele,j)=>{
            li[j].innerHTML=ele;
         })
    });
});
}

let counts=document.querySelectorAll(".counters")
let sec4=document.querySelector("#sec4")

counts.forEach(ele=>
{
    let final_val=parseInt(ele.getAttribute("data-count"))
    let count =0;
    let stopper=false
   window.addEventListener("scroll",()=>{
    if(window.scrollY>sec4.offsetTop-sec4.offsetHeight-200 && stopper==false)
    {
        stopper=true 
        let looper=setInterval(()=>{
        if(count<final_val)
    {
        ele.innerHTML=++count;
    }
    else
    {
        clearInterval(looper)
    }
    },.05)
    }
   })
}
)


let contact=document.querySelector("#login")
if(contact)
{
    let contactForm=document.querySelector("#contactForm")
    let loginForm=document.querySelector("#loginForm")
    let register=document.querySelector("#register")
    
    if(contactForm)
    {
        let Fname=contactForm.querySelector("#Fname")
        let email=contactForm.querySelector("#emails")
        let mob=contactForm.querySelector("#mobNo")
        let subj=contactForm.querySelector("#subject")
        let msg=contactForm.querySelector("#message")
        let chk=contactForm.querySelector("#checkDefault")

        contactForm.addEventListener("submit",(e)=>{
            e.preventDefault()
                let error=[]
        if(Fname.value.length<4)
        {
            error.push("Name Too Short")
        }
          if(email.value.length<4 || !email.value.includes("@"))
        {
            error.push("Enter Correct Email")
        }
          if(subj.value.length<4)
        {
            error.push("Subject Too Short")
        }
          if(msg.value.length<4)
        {
            error.push("Message Too Short")
        }
          if(mob.value.length!=10)
        {
            error.push("Mobile No Should Be 10 Digits")
        }
        if(!chk.checked)
        {
            error.push("Agree To Continue")
        }

        creator(contact,error)
        if(error.length===0){
            alert("Done")
            contactForm.reset();
        }
        })
        
    }
    if(register)
    {
        let Fname=register.querySelector("#Fname")
        let email=register.querySelector("#emails")
        let mob=register.querySelector("#mobNo")
        let Lname=register.querySelector("#Lname")
        let pass=register.querySelector("#pass")
        let repass=register.querySelector("#repass")
        let chk=register.querySelector("#checkDefault")

        register.addEventListener("submit",(e)=>{
            e.preventDefault()
                let error=[]
        if(Fname.value.length<4)
        {
            error.push("First Name Too Short")
        }
          if(email.value.length<4 || !email.value.includes("@"))
        {
            error.push("Enter Correct Email")
        }
          if(Lname.value.length<4)
        {
            error.push("Surname Too Short")
        }
          if(pass.value.length<8 || !pass.value.match(/[@#$]/))
        {
            error.push("It SHould be 8 digit minimum and should have special character")
        }
          if(mob.value.length!=10)
        {
            error.push("Mobile No Should Be 10 Digits")
        }
        if(pass.value!=repass.value)
        {
            error.push("Password doesnot match")
        }
        if(!chk.checked)
        {
            error.push("Agree To Continue")
        }

        creator(login,error)
        if(error.length===0){
            alert("Done")
            register.reset();
        }
        })
    }
}
let sec15=document.querySelector("#sec15")
let appoint=document.querySelector("#appoint")
if(appoint || sec15)
{
   Rexha(appoint?appoint:sec15)
}