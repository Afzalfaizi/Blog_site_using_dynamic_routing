import Button from '../(components)/button/Button';

export default function Table() {
  const students =  [  
   {  
      name:'Muhammad Afzal',
      gender:'Male',
      physics:88,
      maths:87,
      english:78
   },
   {  
      name:'Zaid Goraya',
      gender:'Male',
      physics:96,
      maths:100,
      english:95
   },
   {  
      name:'Badar',
      gender:'Male',
      physics:89,
      maths:90,
      english:70
   },
   {  
      name:'Faisal Latif',
      gender:'Male',
      physics:30,
      maths:25,
      english:40
   },
   {  
      name:'Arbab',
      gender:'Female',
      physics:67,
      maths:45,
      english:78
   },
   {  
      name:'Ayesha',
      gender:'Female',
      physics:56,
      maths:46,
      english:78
   },
   {  
      name:'Mian Haroon',
      gender:'Male',
      physics:12,
      maths:67,
      english:67
   },
   {  
      name:'Aliya',
      gender:'Female',
      physics:78,
      maths:71,
      english:67
   },
   {  
      name:'Usama',
      gender:'Male',
      physics:56,
      maths:45,
      english:67
   },
   {  
      name:'Fatima',
      gender:'Female',
      physics:71,
      maths:90,
      english:23
   },
   {  
      name:'Hina',
      gender:'Female',
      physics:100,
      maths:100,
      english:100
   },
   {  
      name:'Ali Hassan',
      gender:'Male',
      physics:78,
      maths:55,
      english:47
   },
   {  
      name:'Muhammad Usman',
      gender:'Male',
      physics:34,
      maths:89,
      english:78
   },
   {  
      name:'Sehar',
      gender:'Female',
      physics:67,
      maths:88,
      english:90
   }
];

  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Students Performance</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Gender</th>
              <th className="py-2 px-4">Physics</th>
              <th className="py-2 px-4">Maths</th>
              <th className="py-2 px-4">English</th>
            </tr>
          </thead>
          <tbody>
            {students.map((item, index) => (
              <tr  className="bg-gray-100 border-collapse">
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4 text-center">{item.gender}</td>
                <td className="py-2 px-4 text-center">{item.physics}</td>
                <td className="py-2 px-4 text-center">{item.maths}</td>
                <td className="py-2 px-4 text-center">{item.english}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
