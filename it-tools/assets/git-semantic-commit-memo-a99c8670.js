import{o as n,c as i,P as r,d as c,bY as l,l as o,cf as d,k as p,bq as m}from"./index-0c1fde36.js";const h={class:"markdown-body"},g=r(`<h1>Conventional Commits Cheatsheet</h1><h2>Structure</h2><p>A conventional commit message follows this structure:</p><pre><code>&lt;type&gt;[optional scope]: &lt;description&gt;

[optional body]

[optional footer(s)]
</code></pre><h2>Elements</h2><h3>Type (Required)</h3><p>The type describes the kind of change being made. Common types include:</p><ul><li><strong>feat</strong>: A new feature for the user</li><li><strong>fix</strong>: A bug fix for the user</li><li><strong>docs</strong>: Documentation changes</li><li><strong>style</strong>: Code style changes (formatting, missing semicolons, etc.)</li><li><strong>refactor</strong>: Code changes that neither fix a bug nor add a feature</li><li><strong>test</strong>: Adding or updating tests</li><li><strong>chore</strong>: Maintenance tasks, dependency updates, build changes</li><li><strong>perf</strong>: Performance improvements</li><li><strong>ci</strong>: Changes to CI/CD configuration</li><li><strong>build</strong>: Changes to build system or external dependencies</li><li><strong>revert</strong>: Reverting a previous commit</li></ul><h3>Scope (Optional)</h3><p>The scope provides additional context about what part of the codebase is affected:</p><pre><code>feat(auth): add OAuth2 integration
fix(api): resolve timeout issues
docs(readme): update installation instructions
</code></pre><h3>Description (Required)</h3><p>A brief description of the change:</p><ul><li>Use imperative mood (“add” not “added” or “adds”)</li><li>Keep it concise (50 characters or less recommended)</li><li>Don’t capitalize the first letter</li><li>Don’t end with a period</li></ul><h3>Body (Optional)</h3><p>Provides more detailed explanation of the change:</p><ul><li>Separate from description with a blank line</li><li>Explain the motivation and contrast with previous behavior</li><li>Use imperative mood</li></ul><h3>Footer (Optional)</h3><p>Contains metadata about the commit:</p><ul><li><strong>Breaking changes</strong>: Start with <code>BREAKING CHANGE:</code></li><li><strong>Issue references</strong>: <code>Closes #123</code>, <code>Fixes #456</code></li><li><strong>Co-authors</strong>: <code>Co-authored-by: Name &lt;email&gt;</code></li></ul><h2>Examples</h2><h3>Simple commit</h3><pre><code>feat: add user authentication
</code></pre><h3>With scope</h3><pre><code>fix(parser): handle edge case in JSON parsing
</code></pre><h3>With body</h3><pre><code>feat: add email notifications

Users can now receive email notifications for important events.
This includes account changes, security alerts, and system updates.
</code></pre><h3>With footer</h3><pre><code>fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Closes #123
</code></pre><h3>Breaking change</h3><pre><code>feat!: send an email to the customer when a product is shipped

BREAKING CHANGE: The shipping service now requires an email address
</code></pre><h3>Full example</h3><pre><code>feat(shopping cart): add ability to remove items

Users can now remove items from their shopping cart by clicking
the remove button next to each item. This improves the user
experience by allowing corrections without starting over.

Closes #456
Co-authored-by: Jane Doe &lt;jane@example.com&gt;
</code></pre><h2>Common Tools</h2><h3>Commitizen</h3><p>Interactive tool for creating conventional commits:</p><pre><code class="language-shell">npm install -g commitizen
npm install -g cz-conventional-changelog
echo &#39;{ &quot;path&quot;: &quot;cz-conventional-changelog&quot; }&#39; &gt; ~/.czrc
</code></pre><p>Usage:</p><pre><code class="language-shell">git cz
</code></pre><h3>Commitlint</h3><p>Lints commit messages to ensure they follow conventional format:</p><pre><code class="language-shell">npm install --save-dev @commitlint/config-conventional @commitlint/cli
</code></pre><p>Configuration in <code>.commitlintrc.json</code>:</p><pre><code class="language-json">{
  &quot;extends&quot;: [&quot;@commitlint/config-conventional&quot;]
}
</code></pre><h3>Husky</h3><p>Git hooks to enforce commit message format:</p><pre><code class="language-shell">npm install --save-dev husky
npx husky add .husky/commit-msg &#39;npx --no -- commitlint --edit \${1}&#39;
</code></pre><h3>Semantic Release</h3><p>Automatically generates releases based on conventional commits:</p><pre><code class="language-shell">npm install --save-dev semantic-release
</code></pre><h3>Conventional Changelog</h3><p>Generates changelogs from conventional commits:</p><pre><code class="language-shell">npm install -g conventional-changelog-cli
conventional-changelog -p angular -i CHANGELOG.md -s
</code></pre>`,53),u=[g],f={__name:"git-sem.memo",setup(s,{expose:e}){return e({frontmatter:{}}),(a,_)=>(n(),i("div",h,u))}},v=c({__name:"git-semantic-commit-memo",setup(s){l(t=>({"287bb660":o(e).cardColor}));const e=d();return(t,a)=>(n(),i("div",null,[p(o(f))]))}});const b=m(v,[["__scopeId","data-v-19371e59"]]);export{b as default};
