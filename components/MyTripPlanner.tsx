'use client'

import { useState } from 'react'
import type { TripSpot } from '@/types/trip'
import { Button } from '@/components/ui/button'
import { PlusCircle, Trash2, MapPin, Clock } from 'lucide-react'

interface MyTripPlannerProps {
  plan: TripSpot[];
  onRemoveSpot: (spotId: string) => void;
  onAddCustomSpot: () => void;
  onUpdateTime: (spotId: string, newTime: string) => void;
}

export function MyTripPlanner({ plan, onRemoveSpot, onAddCustomSpot, onUpdateTime }: MyTripPlannerProps) {
  const [editingSpotId, setEditingSpotId] = useState<string | null>(null);
  
  const handleTimeUpdate = (spotId: string, newTime: string) => {
    onUpdateTime(spotId, newTime);
    setEditingSpotId(null);
  };

  return (
    <aside className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Next Trip</h2>
      <div className="space-y-4 mb-6 min-h-[100px]">
        {plan.length > 0 ? plan.map((spot, index) => (
          <div key={spot.id} className="group transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-md z-10" />
                {index < plan.length - 1 && (
                  <div className="w-0.5 h-20 bg-gray-200 group-hover:bg-green-400" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-800">{spot.name}</p>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => onRemoveSpot(spot.id)}
                  >
                    <Trash2 className="h-4 w-4 text-gray-400 hover:text-red-500" />
                  </Button>
                </div>
                
                {/* Time editor */}
                <div className="mt-1 flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  {editingSpotId === spot.id ? (
                    <input
                      type="time"
                      defaultValue={spot.arrivalTime}
                      className="bg-gray-100 rounded-md px-2 py-1"
                      onBlur={(e) => handleTimeUpdate(spot.id, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleTimeUpdate(spot.id, e.currentTarget.value);
                        }
                      }}
                      autoFocus
                    />
                  ) : (
                    <button
                      onClick={() => setEditingSpotId(spot.id)}
                      className="hover:bg-gray-100 rounded-md px-2 py-1"
                    >
                      {spot.arrivalTime || 'Set time'}
                    </button>
                  )}
                </div>
                
                <p className="text-sm text-gray-500 mt-2">{spot.description}</p>
              </div>
            </div>
          </div>
        )) : (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
             <MapPin className="mx-auto h-12 w-12 text-gray-400" />
            <p className="text-gray-500 mt-2">Your trip plan is empty.</p>
            <p className="text-xs text-gray-400">Add spots from other trips!</p>
          </div>
        )}
      </div>
      <Button className="w-full" size="lg" onClick={onAddCustomSpot}>
        <PlusCircle className="h-5 w-5 mr-2" />
        Add a Custom Spot
      </Button>
    </aside>
  );
} 