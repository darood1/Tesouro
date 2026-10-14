
const menu=document.querySelector('.menu'),links=document.querySelector('.links');
if(menu)menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('[data-contact-form]').forEach(form=>{
 form.addEventListener('submit',e=>{
   e.preventDefault();
   const d=new FormData(form);
   const subject=encodeURIComponent('Website enquiry - '+(d.get('service')||'General'));
   const body=encodeURIComponent(
     'Name: '+(d.get('name')||'')+'\n'+
     'Company: '+(d.get('company')||'')+'\n'+
     'Phone: '+(d.get('phone')||'')+'\n'+
     'Email: '+(d.get('email')||'')+'\n'+
     'Service: '+(d.get('service')||'')+'\n\n'+
     'Enquiry:\n'+(d.get('message')||'')
   );
   window.location.href='mailto:enquiries@tesourosecurity.co.uk?subject='+subject+'&body='+body;
 });
});
document.getElementById('year')?.append(new Date().getFullYear());
