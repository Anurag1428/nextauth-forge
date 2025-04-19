const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div className="h-full flex items-center justify-center
         bg-radial from-sky-400 to-blue-800">
            {children}
        </div>
     );
}
 
export default AuthLayout;




// import React from 'react'

// interface Login {
//     children: React.ReactNode
// }

// const layout = (props: Login) => {
//   return (
//     <div>
//       {props.children}
//     </div>
//   )
// }

// export default layout
