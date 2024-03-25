// Hide Tab from model driven app form

// Replace XXX with your model driven app's tab internal name

function HideTab(executionContext)
{
    var formContext = executionContext.getFormContext();
    formContext.ui.tabs.get("XXX").setVisible(false);
}

