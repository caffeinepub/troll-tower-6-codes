import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Sparkles, Trophy, Gift } from 'lucide-react';

type Answer = 'yes' | 'no' | null;

function App() {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [answer1, setAnswer1] = useState<Answer>(null);
  const [answer2, setAnswer2] = useState<Answer>(null);
  const [showCodes, setShowCodes] = useState(false);

  const bothAnswersYes = answer1 === 'yes' && answer2 === 'yes';

  const handleGetCodesClick = () => {
    setShowQuestionnaire(true);
  };

  const handleAnswer1Change = (value: string) => {
    setAnswer1(value as Answer);
    // Reset codes when answers change
    setShowCodes(false);
  };

  const handleAnswer2Change = (value: string) => {
    setAnswer2(value as Answer);
    // Reset codes when answers change
    setShowCodes(false);
  };

  const handleRevealCodes = () => {
    setShowCodes(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Trophy className="w-8 h-8 text-primary" />
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Troll Tower 6 Codes
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          {!showQuestionnaire ? (
            <div className="text-center space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                  Unlock Exclusive Codes
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground text-balance">
                  Answer a few quick questions to get your exclusive Troll Tower 6 codes!
                </p>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  onClick={handleGetCodesClick}
                  className="text-lg px-8 py-6 shadow-glow hover:shadow-glow-lg transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get Codes!
                </Button>
              </div>

              <div className="pt-8">
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">
                      🎮 Ready to dominate Troll Tower 6? Click the button above to start!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-scale-in">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Quick Questions</CardTitle>
                  <CardDescription>
                    Answer both questions to unlock your codes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Question 1 */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">
                      Do you subscribe to AcerXDucky?
                    </Label>
                    <RadioGroup
                      value={answer1 || ''}
                      onValueChange={handleAnswer1Change}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors cursor-pointer">
                        <RadioGroupItem value="yes" id="q1-yes" />
                        <Label
                          htmlFor="q1-yes"
                          className="flex-1 cursor-pointer font-medium"
                        >
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors cursor-pointer">
                        <RadioGroupItem value="no" id="q1-no" />
                        <Label
                          htmlFor="q1-no"
                          className="flex-1 cursor-pointer font-medium"
                        >
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Question 2 */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">
                      Do you play Troll Tower 6?
                    </Label>
                    <RadioGroup
                      value={answer2 || ''}
                      onValueChange={handleAnswer2Change}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors cursor-pointer">
                        <RadioGroupItem value="yes" id="q2-yes" />
                        <Label
                          htmlFor="q2-yes"
                          className="flex-1 cursor-pointer font-medium"
                        >
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors cursor-pointer">
                        <RadioGroupItem value="no" id="q2-no" />
                        <Label
                          htmlFor="q2-no"
                          className="flex-1 cursor-pointer font-medium"
                        >
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Get Some Codes Button - Only shown when both answers are Yes */}
                  {bothAnswersYes && !showCodes && (
                    <div className="pt-4 animate-scale-in">
                      <Button
                        size="lg"
                        onClick={handleRevealCodes}
                        className="w-full text-lg py-6 shadow-glow hover:shadow-glow-lg transition-all duration-300"
                      >
                        <Gift className="w-5 h-5 mr-2" />
                        Get Some Codes
                      </Button>
                    </div>
                  )}

                  {/* Code Buttons - Only shown after clicking Get Some Codes */}
                  {bothAnswersYes && showCodes && (
                    <div className="pt-4 space-y-4 animate-scale-in">
                      <div className="text-center mb-4">
                        <p className="text-lg font-semibold text-primary flex items-center justify-center gap-2">
                          <Trophy className="w-5 h-5" />
                          Your Exclusive Codes!
                        </p>
                      </div>
                      
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full text-base py-6 font-mono border-2 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                      >
                        Sub2AcerXDucky = 4500 Money
                      </Button>
                      
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full text-base py-6 font-mono border-2 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                      >
                        FunTrollTower6 = 3000 Money
                      </Button>
                      
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full text-base py-6 font-mono border-2 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                      >
                        ILoveTT6 = 1200 Money
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Helper text */}
              {!bothAnswersYes && answer1 && answer2 && (
                <Card className="border-destructive/50 bg-destructive/5 animate-fade-in">
                  <CardContent className="pt-6">
                    <p className="text-sm text-center text-muted-foreground">
                      You need to answer "Yes" to both questions to unlock the codes!
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-auto">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2026. Built with love using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
