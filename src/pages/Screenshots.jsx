// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Marquee } from '../components/Marquee';

// Import screenshot images
import homeScreenshot from '../assets/screenshots/home.webp';
import splashScreenshot from '../assets/screenshots/splash.webp';
import smartTransactionScreenshot from '../assets/screenshots/smart-transaction.webp';
import transactionsScreenshot from '../assets/screenshots/transactions.webp';
import budgetScreenshot from '../assets/screenshots/budget.webp';
import budgetForecastScreenshot from '../assets/screenshots/bugdet-forecast.webp';
import financialHealthScreenshot from '../assets/screenshots/financial-health.webp';
import financialGoalsScreenshot from '../assets/screenshots/financial-goals.webp';
import savingChallengesScreenshot from '../assets/screenshots/saving-challenges.webp';
import billNegotiationScreenshot from '../assets/screenshots/bill-negotiation.webp';
import aiInsightScreenshot from '../assets/screenshots/ai-insight.webp';
import profileScreenshot from '../assets/screenshots/profile.webp';

function Screenshots() {
  const screenshots = [
    {
      title: 'Home Dashboard',
      image: homeScreenshot
    },
    {
      title: 'Welcome Screen',
      image: splashScreenshot
    },
    {
      title: 'Smart Transactions',
      image: smartTransactionScreenshot
    },
    {
      title: 'Transaction History',
      image: transactionsScreenshot
    },
    {
      title: 'Budget Overview',
      image: budgetScreenshot
    },
    {
      title: 'Budget Forecast',
      image: budgetForecastScreenshot
    },
    {
      title: 'Financial Health',
      image: financialHealthScreenshot
    },
    {
      title: 'Financial Goals',
      image: financialGoalsScreenshot
    },
    {
      title: 'Saving Challenges',
      image: savingChallengesScreenshot
    },
    {
      title: 'Bill Negotiation',
      image: billNegotiationScreenshot
    },
    {
      title: 'AI Insights',
      image: aiInsightScreenshot
    },
    {
      title: 'User Profile',
      image: profileScreenshot
    }
  ];

  return (
    <section id="screenshots" className="min-h-screen bg-[#f5f5f7] py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">App Screenshots</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at Zenith in action. See how easy it is to manage your finances.
          </p>
        </motion.div>

                {/* Marquee - First row (left to right) */}
        <div className="mb-16">
          <Marquee className="py-6" pauseOnHover={true} repeat={2}>
            {screenshots.map((screenshot, index) => (
              <div key={`row1-${index}`} className="mx-4 inline-block">
                  <div className="w-full h-[480px]">
                    <img 
                      src={screenshot.image} 
                      alt={screenshot.title} 
                      className="w-full h-full object-contain"
                    />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-lg font-semibold text-gray-800">{screenshot.title}</h3>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
        
        {/* Marquee - Second row (right to left) */}
        <div className="mb-16">
          <Marquee className="py-6" reverse={true} pauseOnHover={true} repeat={2}>
            {screenshots.slice().reverse().map((screenshot, index) => (
              <div key={`row2-${index}`} className="mx-4 inline-block">
                  <div className="w-full h-[480px]">
                    <img 
                      src={screenshot.image} 
                      alt={screenshot.title} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                <div className="text-center mt-4">
                  <h3 className="text-lg font-semibold text-gray-800">{screenshot.title}</h3>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
        
        
      </div>
    </section>
  );
}

export default Screenshots;