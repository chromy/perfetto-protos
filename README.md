# perfetto-protos

_Use perfetto protos in {Type,Java}Script in the browser and node_

Example:

```typescript
import { TraceConfigSchema } from "perfetto-protos";
import { create, toBinary, toJson } from "@bufbuild/protobuf";

const config = create(TraceConfigSchema, {
  durationMs: 10000,

  buffers: [
    {
      sizeKb: 65536,
    },
  ],

  dataSources: [
    {
      config: {
        name: "linux.ftrace",
        targetBuffer: 0,
        ftraceConfig: {
          ftraceEvents: "sched_switch",
          ftraceEvents: "sched_wakeup",
        },
      },
    },
  ],
});

const bytes = toBinary(TraceConfigSchema, config);
console.log("Config as bytes:", bytes);

const json = toJson(TraceConfigSchema, config);
console.log("Config as json:", json);
```
