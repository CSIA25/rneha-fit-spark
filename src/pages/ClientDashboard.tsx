
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import GradientButton from '../components/ui/gradient-button';

const ClientDashboard = () => {
  const todayWorkout = {
    name: "Upper Body Strength",
    duration: "45 mins",
    exercises: [
      { name: "Push-ups", sets: 3, reps: 12, completed: true },
      { name: "Pull-ups", sets: 3, reps: 8, completed: true },
      { name: "Dumbbell Press", sets: 4, reps: 10, completed: false },
      { name: "Shoulder Flies", sets: 3, reps: 15, completed: false }
    ]
  };

  const stats = [
    { label: "Current Weight", value: "68.5 kg", change: "-2.3 kg", trend: "down" },
    { label: "Body Fat", value: "18.2%", change: "-1.8%", trend: "down" },
    { label: "Muscle Mass", value: "55.8 kg", change: "+1.2 kg", trend: "up" },
    { label: "Workouts This Week", value: "4/6", change: "+1", trend: "up" }
  ];

  const upcomingSessions = [
    {
      type: "Personal Training",
      date: "Today",
      time: "6:00 PM",
      trainer: "Ms. Rneha Rawal",
      location: "Elite Fitness Studio"
    },
    {
      type: "Nutrition Consultation",
      date: "Tomorrow",
      time: "10:00 AM",
      trainer: "Ms. Rneha Rawal",
      location: "Video Call"
    },
    {
      type: "Group Session",
      date: "Friday",
      time: "7:00 AM",
      trainer: "Ms. Rneha Rawal",
      location: "Elite Fitness Studio"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <motion.div
        className="bg-white shadow-sm border-b"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-violet-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, Sarah!</h1>
                <p className="text-gray-600">Ready to crush your fitness goals today?</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">🔥 4 day streak</span>
              <GradientButton variant="primary" size="sm">
                Book Session
              </GradientButton>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <Card key={stat.label} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    stat.trend === 'up' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Today's Workout */}
          <motion.div
            className="lg:col-span-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Today's Workout</span>
                  <span className="text-sm font-normal text-gray-500">{todayWorkout.duration}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">{todayWorkout.name}</h3>
                <div className="space-y-3">
                  {todayWorkout.exercises.map((exercise, index) => (
                    <div key={exercise.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${
                          exercise.completed 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-300 text-gray-600'
                        }`}>
                          {exercise.completed ? '✓' : index + 1}
                        </div>
                        <div>
                          <p className="font-medium">{exercise.name}</p>
                          <p className="text-sm text-gray-600">{exercise.sets} sets × {exercise.reps} reps</p>
                        </div>
                      </div>
                      {!exercise.completed && (
                        <GradientButton variant="primary" size="sm">
                          Mark Complete
                        </GradientButton>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>2/4 exercises completed</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Upcoming Sessions */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session, index) => (
                    <div key={index} className="border-l-4 border-teal-500 pl-4 py-2">
                      <p className="font-semibold text-sm">{session.type}</p>
                      <p className="text-xs text-gray-600">{session.date} at {session.time}</p>
                      <p className="text-xs text-gray-500">{session.location}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <GradientButton variant="primary" className="w-full">
                  📅 Book Session
                </GradientButton>
                <GradientButton variant="secondary" className="w-full">
                  💬 Message Coach
                </GradientButton>
                <GradientButton variant="primary" className="w-full">
                  📊 View Progress
                </GradientButton>
                <GradientButton variant="secondary" className="w-full">
                  🥗 Meal Plans
                </GradientButton>
              </CardContent>
            </Card>

            {/* Achievement */}
            <Card className="bg-gradient-to-r from-teal-500 to-violet-500 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-2">🏆</div>
                <h3 className="font-bold mb-1">Achievement Unlocked!</h3>
                <p className="text-sm opacity-90">4-day workout streak</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
