<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Label } from '$lib/components/ui/label';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import { Badge } from '$lib/components/ui/badge';
	import { Input } from '$lib/components/ui/input';
	import { Separator } from '$lib/components/ui/separator';
</script>

<div class="my-4" />
<form method="POST" action="">
	<div>
		<Label>Job Description</Label>
		<div class="my-4" />
		<Textarea />
	</div>

	<Separator class="my-4" />
	<div>
		<Label>Strength</Label>
		<div class="my-4" />
		<RadioGroup.Root value="comfortable">
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="default" id="r1" />
				<Label for="r1">Default</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="comfortable" id="r2" />
				<Label for="r2">Comfortable</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroup.Item value="compact" id="r3" />
				<Label for="r3">Compact</Label>
			</div>
			<RadioGroup.Input name="spacing" />
		</RadioGroup.Root>
	</div>

	<Separator class="my-4" />

	<div>
		<Label>Preferred Skills</Label>
		<div class="my-4" />
		<Input />
		<div class="my-4" />
		<Badge>React</Badge>
		<Badge>Node</Badge>
		<Badge>Express</Badge>
		<Badge>Python</Badge>
		<Badge>MongoDB</Badge>
	</div>
	<div class="my-4" />

	<Separator class="my-4" />
	<div>
		<Label>Years of Experience</Label>
		<div class="my-4" />
		<Input />
	</div>

	<div class="my-4" />
	<Button type="submit">Submit</Button>
</form>
