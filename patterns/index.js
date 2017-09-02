const patterDict=[
{
  pattern:'\\b(?<greeting>Hi|Hello|Hey)\\b',
  intent:'Hello',
},
{
  pattern:'\\b(bye|exit)\\b',
  intent:'Exit',
},
{
  pattern:'\\b(shit|fuck|damn|get out)\\b',
  intent:'Bad',
},
{
  pattern:'\\b(thanks|thank you|appreciate)\\b',
  intent:'thank',
},
{
  pattern:'like\\sin\\s\\b(?<city>.+)',
  intent:"currentweather"
}
];


module.exports=patterDict;
