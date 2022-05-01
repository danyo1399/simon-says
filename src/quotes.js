

const defaultQuotes = [
    'Knock it out of the park',
    'Run it up the flagpole',
    'As useless as a ashtray on a motorcycle',
    'At this point its very underwhelming',
    'About as helpful as a chocolate fire-guard',
    'throw it at the wall, see what sticks',
]

// base64 encoded new line delimited
let customQuotes;
try {
    let params = (new URL(document.location)).searchParams;
    let encQuotes = params.get('ss_quotes'); 
    if(encQuotes) {
        customQuotes = atob(encQuotes).split('\n').map(x => x.trim());
    }
} catch(err) {
    // nothing to see here
}

export const predefinedQuotes = customQuotes?.length > 0 ? customQuotes : defaultQuotes;