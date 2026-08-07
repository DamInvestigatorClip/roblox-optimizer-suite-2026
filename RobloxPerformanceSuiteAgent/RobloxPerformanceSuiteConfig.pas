{ RobloxPerformanceSuite configuration unit }
unit RobloxPerformanceSuiteConfig;

interface

const
  APP_NAME = 'RobloxPerformanceSuite';
  APP_CHANNEL = 'github-pages';
  APP_KEYWORD = 'roblox fps unlocker';

type
  TAppPaths = record
    DataDir: string;
    LogFile: string;
  end;

function DefaultPaths: TAppPaths;

implementation

function DefaultPaths: TAppPaths;
begin
  Result.DataDir := 'data';
  Result.LogFile := 'data/agent.log';
end;

end.
