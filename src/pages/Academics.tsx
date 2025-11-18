const Academics = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Academic Performance
        </h1>
        <p className="text-muted-foreground">Detailed subject-wise analysis</p>
      </div>

      <div className="glass-card rounded-2xl p-8 text-center">
        <div className="text-6xl mb-4">📚</div>
        <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
        <p className="text-muted-foreground">
          Detailed marks analysis, attendance tracking, and grade predictions
        </p>
      </div>
    </div>
  );
};

export default Academics;
