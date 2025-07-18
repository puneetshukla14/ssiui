import { Button } from "@/components/ui/button";

const InnovationSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Standing at the Forefront of Innovation</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          As we explore new technology, we push the capabilities of what is possible, driving
          progress through continuous innovation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Emmy Award Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-64 bg-gray-200 relative">
              <img 
                src="https://picsum.photos/id/20/800/600" 
                alt="DJI Ronin Series" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">DJI Ronin Series Wins 2024 Emmy® Award</h3>
              <Button asChild variant="outline">
                <a href="#">Learn More</a>
              </Button>
            </div>
          </div>
          
          {/* Agriculture Report Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-64 bg-gray-200 relative">
              <img 
                src="https://picsum.photos/id/21/800/600" 
                alt="DJI Agriculture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">DJI Agriculture Annual Report</h3>
              <Button asChild variant="outline">
                <a href="#">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;