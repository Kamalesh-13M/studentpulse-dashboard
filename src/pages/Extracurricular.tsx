const Extracurricular = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
          Extracurricular Activities
        </h1>
        <p className="text-muted-foreground">Your achievements and badges</p>
      </div>

      <div className="glass-card rounded-2xl p-8 text-center">
        <div className="text-6xl mb-4">🏆</div>
        <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
        <p className="text-muted-foreground">
          Activity timeline, badges collection, and certificates
        </p>
      </div>
    </div>
  );
};

export default Extracurricular;
