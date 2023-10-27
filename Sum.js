let Freelancer = [
  {
    name: 'Alice',
    price: 30,
    occupation: 'Writer',
  },
  {
    name: 'Bob',
    price: 50,
    occupation: 'Teacher',
  },
  {
    name: 'Carol',
    price: 70,
    occupation: 'Programmer',
  },
  {
    name: 'Arianna',
    price: 35,
    occupation: 'Photographer',
  },
  {
    name: 'Kobe',
    price: 60,
    occupation: 'Therapist',
  },
];
function renderFreelancers(){
  const freelancerList = document.getElementById("freelancerList");
  freelancerList.innerHTML = "";
  
  Freelancer.forEach(freelancer => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = freelancer.name;
    row.appendChild(nameCell);

    const occupationalCell = document.createElement("td");
    occupationalCell.textContent = freelancer.occupation;
    row.appendChild(occupationalCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = `$${freelancer.price}`;
    row.appendChild(priceCell);

    freelancerList.appendChild(row);
  });
}
renderFreelancers();