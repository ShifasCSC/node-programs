
async function getData(){
    try{
        const res=await fetch("http://localhost:3000/getdonors")
        const data= await res.json();
        console.log(data);
        str=``
        data.map((donor)=>{
            str+=` <div class="div1">
            <label for="input"></label>
            <input type="text" value=${donor.name}  id="name" placeholder="name">
            <input type="text" value=${donor.email} id="email"  placeholder="email">
            <input type="text" value=${donor.phone} id="phone"  placeholder="phone">
        </div>
        <div class="div2">
            <input type="text" value=${donor.bloodgroup} id="bloodgroup" placeholder="blood group">
            <input type="text" value=${donor.gender} id="gender" placeholder="gender">
        </div>
        
        <div class="btn1">
            <button>Edit</button>
            <button>Save</button>
            <button>Delete</button>
        </div>
            
            `
        })
        
    }catch(error){
        console.log(error);
        
    }
    document.getElementById("main").innerHTML=str;
}
getData();