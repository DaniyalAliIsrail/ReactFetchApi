import React from 'react'
import {
       Card,
       CardHeader,
       CardBody,
       CardFooter,
       Typography,
       Button,
     } from "@material-tailwind/react";

const Mycards = ({cardsData}) => {
  return (
  <>
  
  <Card className="w-96 border border-black">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img 
        width={"250"} height={"100"} 
          src={cardsData.image}
          alt="card-image"
          className=" h-sm w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Rating {cardsData.rating.rate}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {cardsData.price}$
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {cardsData.title}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
    
  
  </>
  )
}

export default Mycards