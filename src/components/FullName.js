import React from "react";
export default function FullName() {
    const user = 
        {
          id: 1,
          name: 'Sakis Ahmed',
          adress: '32 Rue Tah houcine Ezzahra',
        }
    return (
        <div className="">
          {user.name}
        </div>
      );
}