import { Slot, component$ } from '@builder.io/qwik';
import { Popover, PopoverContent, PopoverTrigger } from '@qwik-ui/headless';
import { PreviewCodeExample } from 'apps/website/src/routes/docs/_components/preview-code-example/preview-code-example';

export const MainExample = component$(() => {
  return (
    <PreviewCodeExample>
      <div q:slot="actualComponent">
        <Popover placement="top">
          <PopoverContent>
            <div class="bg-slate-500 p-4 text-white">Hi, I'm the content</div>
          </PopoverContent>
          <PopoverTrigger class="text-white">Click on me</PopoverTrigger>
        </Popover>
      </div>
      <div q:slot="codeExample">
        <Slot />
      </div>
    </PreviewCodeExample>
  );
});

export const Example1 = component$(() => {
  return (
    <PreviewCodeExample>
      <div q:slot="actualComponent">
        <Popover placement="top">
          <PopoverContent>
            <div class="bg-slate-500 p-4 text-white">
              Hi, I'm the content, but now on top
            </div>
          </PopoverContent>
          <PopoverTrigger class="text-white">Click on me</PopoverTrigger>
        </Popover>
      </div>
      <div q:slot="codeExample">
        <Slot />
      </div>
    </PreviewCodeExample>
  );
});
