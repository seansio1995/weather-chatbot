const patterDict=[
{
  pattern:'\\b(Hi|Hello|Hey)\\b',
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
}
];


module.exports=patterDict;
