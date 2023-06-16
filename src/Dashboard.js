import React from 'react';
import Card from './Card';

function Dashboard() {
    let card=[
        {
            title:"Earnings (Monthly)",
            price:"$40,000",
            theme:"primary"
        },
        {
            title:" Earnings (Annual)",
            price:"$215,000",
            theme:"success"
        },
        {
            title:"Task",
            price:"$40,000",
            theme:"info"
        },
        {
            title:"PENDING",
            price:"$40,000",
            theme:"warning"
        }
    ]
  return (
    <div class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
    <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
</div>
<div class="row">
{
    card.map((card)=>{
        return <Card card={card}></Card>
    }
    )
}
</div>
</div>
  );
}

export default Dashboard;
