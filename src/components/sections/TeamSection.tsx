import React from "react";

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-8 px-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2">Who Are We</h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">A small team focused on delivering practical automation and measurable outcomes.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          <div className="text-center bg-card/50 p-6 rounded-lg">
            <div className="mx-auto w-32 h-32 rounded-full mb-4 relative overflow-hidden">
            <img src="/assets/CR-profile-image.png" alt="Cristhian Richard" className="absolute" />
            </div>
            <h3 className="text-lg font-semibold">Cristhian Richard</h3>
            <p className="text-sm text-muted-foreground mt-2">Focused on turning ideas into real, usable solutions. Enjoys breaking down complex problems and building tools that actually make people’s lives easier.</p>
          </div>

          <div className="text-center bg-card/50 p-6 rounded-lg">
            <div className="mx-auto w-32 h-32 rounded-full mb-4 relative overflow-hidden">
             <img src="/assets/ST-profile-image.png" alt="Santiago Tommasi" className="absolute" />
            </div>
            <h3 className="text-lg font-semibold">Santiago Tommasi</h3>
            <p className="text-sm text-muted-foreground mt-2">Driven by curiosity and continuous improvement. Believes AI should empower people, not replace them — and that great products come from listening first.</p>
          </div>

          <div className="text-center bg-card/50 p-6 rounded-lg">
            <div className="mx-auto w-32 h-32 rounded-full mb-4 relative overflow-hidden">
                  <img src="/assets/CE-profile-image.png" alt="Carla Estrada" className="absolute" />
            </div>
            <h3 className="text-lg font-semibold">Carla Estrada</h3>
            <p className="text-sm text-muted-foreground mt-2">Passionate about creating simple experiences through smart technology. Always looking for better ways to connect people, data, and automation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
