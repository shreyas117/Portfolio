import type React from "react"

export const Timeline: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <ul className="list-none p-0 m-0">{children}</ul>
}

export const TimelineItem: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <li className="relative mb-8">{children}</li>
}

export const TimelineConnector: React.FC = () => {
  return (
    <div className="absolute left-6 top-0 transform -translate-x-1/2 w-0.5 bg-gray-200 h-full"></div>
  )
}

export const TimelineIcon: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="w-12 h-12 mr-4 bg-white rounded-full shadow-md flex items-center justify-center z-10">
      {children}
    </div>
  )
}


// export const TimelineConnector: React.FC = () => {
//   return <div className="absolute left-6 top-0 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
// }

export const TimelineHeader: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <div className="flex items-center mb-2">{children}</div>
}

// export const TimelineIcon: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
//   return (
//     <div className="w-12 h-12 mr-4 bg-white rounded-full shadow-md flex items-center justify-center">{children}</div>
//   )
// }

export const TimelineBody: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <div>{children}</div>
}

