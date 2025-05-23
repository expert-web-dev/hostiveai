import React from 'react';
import { ActivitySquare, Check, AlertTriangle, AlertOctagon } from 'lucide-react';
import { serverStatus } from '../data/status';
import Card from './ui/Card';

const StatusIndicator: React.FC<{ status: string }> = ({ status }) => {
  switch (status) {
    case 'operational':
      return (
        <div className="flex items-center text-green-600">
          <Check className="h-5 w-5 mr-1" />
          <span>Operational</span>
        </div>
      );
    case 'maintenance':
      return (
        <div className="flex items-center text-amber-600">
          <AlertTriangle className="h-5 w-5 mr-1" />
          <span>Maintenance</span>
        </div>
      );
    case 'outage':
      return (
        <div className="flex items-center text-red-600">
          <AlertOctagon className="h-5 w-5 mr-1" />
          <span>Outage</span>
        </div>
      );
    default:
      return null;
  }
};

const ServerStatusSection: React.FC = () => {
  const hasOutage = serverStatus.some(server => server.status === 'outage');
  const hasMaintenance = serverStatus.some(server => server.status === 'maintenance');
  
  let overallStatus = 'operational';
  if (hasOutage) overallStatus = 'outage';
  else if (hasMaintenance) overallStatus = 'maintenance';
  
  const avgUptime = serverStatus.reduce((acc, server) => acc + server.uptime, 0) / serverStatus.length;

  return (
    <section id="status" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Server Status
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor our infrastructure performance in real-time. We're committed to transparency
            and maintaining our 99.9% uptime guarantee.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-white p-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-gray-200">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Overall System Status</h3>
                <StatusIndicator status={overallStatus} />
              </div>
              
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Average Uptime</div>
                  <div className="text-2xl font-bold text-gray-900">{avgUptime.toFixed(3)}%</div>
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Last Updated</div>
                  <div className="text-gray-900">Just now</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serverStatus.map((server) => (
                <div 
                  key={server.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{server.name}</h4>
                      <div className="text-sm text-gray-600">{server.location}</div>
                    </div>
                    <StatusIndicator status={server.status} />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="text-gray-600">Uptime: </span>
                      <span className="font-medium text-gray-900">{server.uptime}%</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Checked {server.lastChecked}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Uptime History</h3>
          <div className="bg-white rounded-lg shadow p-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <button className="text-sm font-medium text-purple-700">Last 24 hours</button>
              <button className="text-sm text-gray-600">Last 7 days</button>
              <button className="text-sm text-gray-600">Last 30 days</button>
              <button className="text-sm text-gray-600">Last 90 days</button>
            </div>
            
            <div className="h-16 flex items-end">
              {Array.from({ length: 24 }).map((_, index) => {
                const height = 90 + Math.random() * 10;
                return (
                  <div 
                    key={index}
                    className="flex-1 bg-purple-500 mx-0.5 rounded-t-sm"
                    style={{ height: `${height}%` }}
                  ></div>
                );
              })}
            </div>
            
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>12AM</span>
              <span>6AM</span>
              <span>12PM</span>
              <span>6PM</span>
              <span>Now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerStatusSection;