// export default function Dashboard() {
//   return (
//     <div className="space-y-8">
//       <div>
//         <h2 className="text-3xl font-bold">Dashboard Overview</h2>
//         <p className="text-gray-500">
//           Real-time logistics performance and operational metrics.
//         </p>
//       </div>
//     </div>
//   );
// }

import React from 'react'

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      <div className='flex flex-col mt-5'>
          <h2 className="text-3xl font-bold text-foreground">Dashboard Overview</h2>
          <p className="text-mutedForeground">
          Real-time logistics performance and operational metrics.
          </p>
      </div>
    </div>
  )
}

export default DashboardPage