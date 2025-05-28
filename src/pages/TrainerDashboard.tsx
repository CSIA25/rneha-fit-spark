
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import GradientButton from '../components/ui/gradient-button';
import AnimatedCounter from '../components/ui/animated-counter';

const TrainerDashboard = () => {
  const stats = [
    { label: "Active Clients", value: 45, icon: "👥", color: "from-teal-500 to-cyan-500" },
    { label: "Sessions Today", value: 8, icon: "📅", color: "from-violet-500 to-purple-500" },
    { label: "Monthly Revenue", value: 125000, prefix: "₹", icon: "💰", color: "from-orange-500 to-red-500" },
    { label: "Client Satisfaction", value: 98, suffix: "%", icon: "⭐", color: "from-green-500 to-emerald-500" }
  ];

  const todaySchedule = [
    { time: "6:00 AM", client: "Sarah Johnson", type: "Personal Training", status: "completed" },
    { time: "7:00 AM", client: "Group Session", type: "HIIT Training", status: "completed" },
    { time: "9:00 AM", client: "Mike Chen", type: "Strength Training", status: "completed" },
    { time: "11:00 AM", client: "Lisa Martinez", type: "Yoga & Flexibility", status: "in-progress" },
    { time: "3:00 PM", client: "David Wilson", type: "Personal Training", status: "upcoming" },
    { time: "5:00 PM", client: "Emma Davis", type: "Nutrition Consultation", status: "upcoming" },
    { time: "6:00 PM", client: "Group Session", type: "Cardio Blast", status: "upcoming" },
    { time: "7:30 PM", client: "John Smith", type: "Personal Training", status: "upcoming" }
  ];

  const recentClients = [
    {
      name: "Sarah Johnson",
      avatar: "👩‍💼",
      lastSeen: "2 hours ago",
      progress: "+2.3 kg muscle gain",
      status: "excellent"
    },
    {
      name: "Mike Chen", 
      avatar: "👨‍💻",
      lastSeen: "1 day ago",
      progress: "-5.2 kg weight loss",
      status: "good"
    },
    {
      name: "Lisa Martinez",
      avatar: "👩‍🏫",
      lastSeen: "30 mins ago",
      progress: "+15% flexibility",
      status: "excellent"
    },
    {
      name: "David Wilson",
      avatar: "👨‍🔧",
      lastSeen: "3 hours ago",
      progress: "+8 kg deadlift PR",
      status: "good"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'upcoming': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600';
      case 'good': return 'text-blue-600';
      case 'needs-attention': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

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
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome, Ms. Rneha!</h1>
                <p className="text-gray-600">You have 5 sessions scheduled today</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">🏆 Top Rated Trainer</span>
              <GradientButton variant="primary" size="sm">
                Add Client
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
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-2xl`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    <AnimatedCounter 
                      end={stat.value} 
                      prefix={stat.prefix} 
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Today's Schedule */}
          <motion.div
            className="lg:col-span-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {todaySchedule.map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="text-sm font-medium text-gray-900 min-w-[80px]">
                          {session.time}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{session.client}</p>
                          <p className="text-sm text-gray-600">{session.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(session.status)}`}>
                          {session.status.replace('-', ' ')}
                        </span>
                        {session.status === 'upcoming' && (
                          <GradientButton variant="primary" size="sm">
                            Start
                          </GradientButton>
                        )}
                      </div>
                    </div>
                  ))}
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
            {/* Recent Client Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Client Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentClients.map((client, index) => (
                    <div key={client.name} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl">{client.avatar}</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">{client.name}</p>
                        <p className="text-xs text-gray-500">{client.lastSeen}</p>
                        <p className={`text-xs font-medium ${getProgressColor(client.status)}`}>
                          {client.progress}
                        </p>
                      </div>
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
                  👥 Manage Clients
                </GradientButton>
                <GradientButton variant="secondary" className="w-full">
                  📋 Create Workout Plan
                </GradientButton>
                <GradientButton variant="primary" className="w-full">
                  📊 Analytics & Reports
                </GradientButton>
                <GradientButton variant="secondary" className="w-full">
                  💬 Message Center
                </GradientButton>
                <GradientButton variant="primary" className="w-full">
                  📅 Schedule Management
                </GradientButton>
              </CardContent>
            </Card>

            {/* Today's Achievement */}
            <Card className="bg-gradient-to-r from-teal-500 to-violet-500 text-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-2">🌟</div>
                <h3 className="font-bold mb-1">Milestone Reached!</h3>
                <p className="text-sm opacity-90">500+ clients transformed</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDashboard;
