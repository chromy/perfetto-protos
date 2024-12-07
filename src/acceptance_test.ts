import o from "ospec";
import { TraceConfig, TraceConfigSchema } from "./index";
import { create, toBinary, fromBinary, toJson } from "@bufbuild/protobuf";

o.spec("acceptance", () => {
  o("round trip config as binary", () => {
    const message: TraceConfig = create(TraceConfigSchema);
    message.durationMs = 12345;
    const binary = toBinary(TraceConfigSchema, message);
    const decoded = fromBinary(TraceConfigSchema, binary);
    o(decoded.durationMs).equals(12345);
  });
});
