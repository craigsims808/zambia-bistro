import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const Hero = () => {
  const { toast } = useToast();

  const handleReservation = () => {
    toast({
      title: "Reservation Request",
      description: "Our team will contact you shortly to confirm your reservation.",
    });
  };

  return (
    <div className="relative h-screen min-h-[600px] w-full">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative flex h-full items-center justify-center text-center">
        <div className="animate-fade-up space-y-6 opacity-0">
          <h1 className="text-4xl font-bold text-cream sm:text-6xl md:text-7xl">
            Taste of Zambia
          </h1>
          <p className="mx-auto max-w-xl text-lg text-cream/90">
            Experience authentic Zambian cuisine in the heart of Lusaka
          </p>
          <Button
            onClick={handleReservation}
            className="bg-primary hover:bg-primary/90"
          >
            Make a Reservation
          </Button>
        </div>
      </div>
    </div>
  );
};