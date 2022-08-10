import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Card from './Card';
function App() {
  const data =[
    {
      name : "Free",
      price: 0,
      currency :"$",
      period : "month",
      features: [
        {
          title : "single User",
          isEnable :true
        },
        {
          title : "5GB Storage",
          isEnable :true
        },
        {
          title : "Unlimited Public Project ",
          isEnable :true
        },
        {
          title : "Community Access",
          isEnable :true
        },
        {
          title : "Unlimited Private Projects",
          isEnable :false
        },
        {
          title : "Dedicated Phone Support",
          isEnable :false
        },
        {

          title : "Free Subdomain",
          isEnable :false
        },
        {
          title : "Monthly Status Reports",
          isEnable :false
        },
      ]
    },
    {
      name : "PLUS",
      price: 9,
      currency :"$",
      period : "month",
      features: [
        {
          title : "5 User",
          isEnable :true
        },
        {
          title : "50GB Storage",
          isEnable :true
        },
        {
          title : "Unlimited Public Project ",
          isEnable :true
        },
        {
          title : "Community Access",
          isEnable :true
        },
        {
          title : "Unlimited Private Projects",
          isEnable :true
        },
        {
          title : "Dedicated Phone Support",
          isEnable :true
        },
        {

          title : "Free Subdomain",
          isEnable :true
        },
        {
          title : "Monthly Status Reports",
          isEnable :false
        },
      ]
    },
    {
      name : "PLUS",
      price: 49,
      currency :"$",
      period : "month",
      features: [
        {
          title : "Unlimited User",
          isEnable :true
        },
        {
          title : "150GB Storage",
          isEnable :true
        },
        {
          title : "Unlimited Public Project ",
          isEnable :true
        },
        {
          title : "Community Access",
          isEnable :true
        },
        {
          title : "Unlimited Private Projects",
          isEnable :true
        },
        {
          title : "Dedicated Phone Support",
          isEnable :true
        },
        {

          title : " Unlimited Free Subdomain",
          isEnable :true
        },
        {
          title : "Monthly Status Reports",
          isEnable :true
        },
      ]
    }
  ]
 return(
  <section class="pricing py-5">
    <div class="container">
    <div class="row">
     {
      data.map((item) =>{
        return <Card item= {item}></Card>

      })
     }
    </div>
    </div>
  </section>
    
  )
}

export default App;
