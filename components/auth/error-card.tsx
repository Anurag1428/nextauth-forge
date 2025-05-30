// import { CardWrapper } from "./card-wrapper";
// import { ExclamationTriangleIcon } from "@radix-ui/react-icons";


// export const ErrorCard = () => {
//     return (
//         <CardWrapper
//             headerLabel="Oops! Something went wrong!"
//             backButtonHref="/auth/login"
//             backButtonLabel="Back to Login"
//             >
//                 <div className="w-full items-center flex justify-center">
//                     <ExclamationTriangleIcon className="text-destructive"/>
//                 </div>
//         </CardWrapper>
//     )
// }

import { CardWrapper } from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
    return (
        <CardWrapper
            headerLabel="Oops! Something went wrong!"
            backButtonHref="/auth/login"
            backButtonLabel="Back to Login"
        >
            <div className="w-full flex flex-col items-center justify-center space-y-4">
                <ExclamationTriangleIcon className="text-destructive h-16 w-16" />
                <p className="text-sm text-muted-foreground text-center">
                    Something unexpected happened. Please try again.
                </p>
            </div>
        </CardWrapper>
    )
}