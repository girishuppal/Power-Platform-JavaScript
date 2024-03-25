/* Prevent Auto saving of Form in model driven app */

function preventAutoSave(formContext)
{
    var args = formContext.getEventArgs();
    
  /* Some possible Event mode values
  
  Save = 1
  Save and Close = 2
  Save and New = 59
  Save as Completed = 58
  AutoSave = 70
  
  */
  
  // Disables Auto Saving of form
  if(args.getSaveMode() == 70)
    {
        args.preventDefault();
    }
}
