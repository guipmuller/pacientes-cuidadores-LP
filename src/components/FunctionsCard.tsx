import type { ReactNode } from "react";

interface FunctionsCardProps {
    children: ReactNode;
  }

const FunctionsCard = ({children}: FunctionsCardProps) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default FunctionsCard;