const h1Element1 = document.createElement("h1");
h1Element1.id = "title";
h1Element1.innerHTML = "DOM Manipulation form";
h1Element1.style.textAlign = "center";

const paraElement = document.createElement("p");
paraElement.id = "description";
paraElement.innerText = "Create a form using DOM";
paraElement.style.textAlign = "center";

const divElement = document.createElement("div");
divElement.style.padding = "16px";
divElement.style.margin = "20px";


const formElement = document.createElement("form");
formElement.id = "form";
formElement.style.margin = "0 auto";
formElement.style.maxWidth = "700px";

const divEle = document.createElement("div");
divEle.className = "form-group";
divEle.style.border = "1px solid #ccc";
divEle.style.padding = "20px";
divEle.style.marginTop = "20px";
divEle.style.borderRadius = "8px";

const fieldElements = ["First-name", "Last-name", "Address","pincode"];
fieldElements.forEach( (value) => {
   const label = document.createElement("label");
   label.setAttribute("for", value.toLowerCase());
   if( value === "First-name")label.textContent = "Firstname:";
   else if (value === "Last-name") label.textContent = "Lastname:";
   else label.textContent = `${value}:`;
   label.style.margin = "20px";
   label.style.display = "block";
   label.style.marginBottom = "8px";
   label.style.fontWeight = "bold";
   if (value === "Address"){
    const input = document.createElement("textarea");
    input.type = "textarea";
    input.textContent = value;
    input.placeholder = value.toLowerCase();
    input.id = value.toLowerCase();
    input.value = "";
    input.nodeName = "TEXTAREA";
    input.required = true;
    input.style.margin = "0 20px";
    input.style.width = "100%";
    input.style.padding = "8px";
    input.style.marginBottom = "16px";
    input.style.boxSizing = "border-box";
    divEle.appendChild(label);
    divEle.appendChild(input);
   }
   else{
     const input = document.createElement("input");
     input.type = "text";
     input.placeholder = value.toLowerCase();
     input.name = value.toLowerCase();
     input.id = value.toLowerCase();
     input.value = "";
     input.required = true;
     input.style.margin = "0 20px";
     input.style.width = "100%";
     input.style.padding = "8px";
     input.style.marginBottom = "16px";
     input.style.boxSizing = "border-box";
     divEle.appendChild(label);
     divEle.appendChild(input);
   }
   divEle.appendChild(document.createElement("br"));
});

const genderElement = document.createElement("label");
genderElement.textContent = "Gender: ";
genderElement.style.margin = "20px";

divEle.appendChild(genderElement);
const genderarr = ["Male", "Female", "Others"];
genderarr.forEach((gender) => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "gender";
    radio.required = true;
    radio.id = gender.toLowerCase();
    radio.value = gender.toLowerCase();
    radio.style.margin = "20px";
    radio.style.marginRight = "8px";
    const radioLabel = document.createElement("label");
    radioLabel.textContent = gender;
    divEle.appendChild(radio);
    divEle.appendChild(radioLabel);
});
divEle.appendChild(document.createElement("br"));

const foodLabel = document.createElement("label");
foodLabel.textContent = "Choice of Food (Select at least 2): ";
foodLabel.style.margin = "20px";


const foods = ["Biriyani", "Pizza", "Chickenburger", "Salad", "Burger"]
divEle.appendChild(foodLabel);
foods.forEach( (food) => {
    const checkBoxElement = document.createElement("input");
    checkBoxElement.type = "checkbox";
    checkBoxElement.name = "food";
    checkBoxElement.id = "food";
    checkBoxElement.value = food;
    checkBoxElement.style.margin = "20px";
    checkBoxElement.style.marginRight = "8px";
    const label = document.createElement("label");
    label.textContent = food;
    divEle.append(checkBoxElement,label);
});
divEle.appendChild(document.createElement("br"));

const stateElement = document.createElement("label");
stateElement.textContent = "State: ";
stateElement.style.margin = "20px";
stateElement.style.display = "block";
stateElement.style.marginBottom = "8px";
stateElement.style.fontWeight = "bold";
const stateInput = document.createElement("input");
stateInput.type = "text";
stateInput.name = "state";
stateInput.id = "state";
stateInput.required = true;
stateInput.placeholder = "state";
stateInput.style.margin = "0 20px";
stateInput.style.width = "100%";
stateInput.style.padding = "8px";
stateInput.style.marginBottom = "16px";
stateInput.style.boxSizing = "border-box";

const countryElement = document.createElement("label");
countryElement.textContent = "Country: ";
countryElement.style.margin = "20px";
countryElement.style.display = "block";
countryElement.style.marginBottom = "8px";
countryElement.style.fontWeight = "bold";
const countryInput = document.createElement("input");
countryInput.type = "text";
countryInput.name = "country";
countryInput.id = "country";
countryInput.required = true;
countryInput.placeholder = "country";
countryInput.style.margin = "0 20px";
countryInput.style.width = "100%";
countryInput.style.padding = "8px";
countryInput.style.marginBottom = "16px";
countryInput.style.boxSizing = "border-box";
divEle.appendChild(stateElement);
divEle.appendChild(stateInput);
divEle.appendChild(document.createElement("br"));
divEle.appendChild(countryElement);
divEle.appendChild(countryInput);
divEle.appendChild(document.createElement("br"));
divEle.appendChild(document.createElement("br"));

const submitElement = document.createElement("button");
submitElement.type = "submit";
submitElement.id = "submit"
submitElement.textContent = "Submit";
submitElement.className = "btn btn-primary";
submitElement.style.marginLeft = "40%";
submitElement.style.padding = "10px";
submitElement.style.backgroundColor = "#4CAF50";
submitElement.style.color = "white";
submitElement.style.border = "none";
submitElement.style.borderRadius = "4px";
submitElement.style.cursor = "pointer";
submitElement.style.width = "calc(100% - 45vw)";

formElement.appendChild(document.createElement("br"));

formElement.append(divEle,submitElement);
console.log(divEle);

const tableElement = document.createElement("table");
tableElement.style.border = "1px solid black";
tableElement.style.borderCollapse = "collapse";
tableElement.style.width = "100%";
tableElement.style.textAlign = "center";
tableElement.className="table";
const tableHeadElement = document.createElement("thead");
const tableBodyElement = document.createElement("tbody");
const tableRowElement = document.createElement("tr");
const headfields = ["FirstName", "LastName", "address", "pincode","gender", "food", "state","country"]
headfields.forEach((fields) => {
   const tabledata = document.createElement("th");
   tabledata.innerText = fields;
   tabledata.style.border = "1px solid black";
   tabledata.style.padding = "12px";
   tableRowElement.appendChild(tabledata);   
});
tableHeadElement.append(tableRowElement);
tableElement.append(tableHeadElement,tableBodyElement);

console.log(formElement);
console.log(tableElement)
const tableRowElement1 = document.createElement("tr");
formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const tr = document.createElement("tr");
    console.log(fieldElements)
    fieldElements.forEach((fields) => {
        const tdElement = document.createElement("td");
        tdElement.innerText = document.getElementById(fields.toLowerCase()).value;
        tdElement.style.border = "1px solid black";
        tdElement.style.padding = "12px";
        tr.appendChild(tdElement);
        tableBodyElement.appendChild(tr);
    })
    const val = ["gender","food","state","country"]
    val.forEach((val) => {
      const tdElement = document.createElement("td");
      console.log(document.getElementById("gender"))
      if(val === "gender"){
        const getGender  = document.querySelector('input[name="gender"]:checked');
        tdElement.innerHTML = getGender.value;
      }
      else if(val === "food"){ 
        let outputvalue = "";
        const getFood = document.querySelectorAll('input[name="food"]:checked');
        if(Array.from(getFood).length > 1){
            Array.from(getFood).forEach((output) =>{
              if(Array.from(getFood)[Array.from(getFood).length - 1] === output) outputvalue+=output.value
              else outputvalue+=output.value + ",";
            });
        }
        else{
          Array.from(getFood).forEach((output) =>{
            console.log(output)
            outputvalue+=output.value;
          });
        }

        tdElement.innerHTML = outputvalue;
      }
      else tdElement.innerHTML = document.getElementById(val).value;
      tdElement.style.border = "1px solid black";
      tr.append(tdElement);
      tableBodyElement.appendChild(tr);
    });
    tableBodyElement.append(tr);
    tableElement.append(tableBodyElement);
    formElement.reset();
})
divElement.append(h1Element1,paraElement,formElement,document.createElement("br"),tableElement);
document.body.append(divElement);
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "#f4f4f4";
document.body.style.margin = "0";
document.body.style.padding = "0";