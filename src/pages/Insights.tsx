const Insights = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Smart Insights
        </h1>
        <p className="text-muted-foreground">AI-powered growth recommendations</p>
      </div>

      <div className="glass-card rounded-2xl p-8 text-center">
        <div className="text-6xl mb-4">📊</div>
        <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
        <p className="text-muted-foreground">
          Personalized suggestions, skill radar charts, and study plans
        </p>
      </div>
    </div>
  );
};

export default Insights;
